
var os = require('os');
var fs = require('fs');
var ini = require('node-ini');
var url = require('url');
var util = require('util');
var http = require('http');
var cluster = require('cluster');
var querystring = require('querystring');

var kaltura = module.exports = require('./KalturaBase');

var KalturaServer = function(){
};
util.inherits(KalturaServer, kaltura.KalturaBase);

KalturaServer.prototype.hostname = os.hostname();
KalturaServer.prototype.webServer = null;
KalturaServer.prototype.configFiles = null;

KalturaServer.prototype.init = function() {
	KalturaLogger.log('Initializing');
	this.configFiles = {};
	var config = this.loadConfig();
	kaltura.KalturaBase.prototype.init.apply(this, [config]);
	this.startWebServer();
};

KalturaServer.prototype.loadConfig = function() {

	if(process.argv.length > 2){
		this.config = JSON.parse(process.argv[2]);
		return this.config;
	}
	
	var configDir = './config';
	var cacheDir = './cache';

	if (!fs.existsSync(cacheDir)) {
		fs.mkdirSync(cacheDir);
	}

	var files = fs.readdirSync(configDir);
	var This = this;

	var configData = '';
	var pattern = /.+\.ini$/;
	for ( var index in files) {
		if(!pattern.test(files[index]))
			continue;
		
		var filePath = configDir + '/' + files[index];
		configData += os.EOL;
		configData += fs.readFileSync(filePath, 'utf-8');

		fs.lstat(filePath, function(err, stats) {
			if (err) {
				KalturaLogger.error(err);
			} else {
				This.configFiles[filePath] = stats.mtime;
			}
		});
	}

	var cacheConfigPath = cacheDir + '/config.ini';
	fs.writeFileSync(cacheConfigPath, configData);

	return ini.parseSync(cacheConfigPath);
};

KalturaServer.prototype.startWebServer = function() {
    this.webServer = http.createServer();
};


var KalturaMainProcess = function(){
	KalturaLogger.log('Initializing');
	this.init();
	this.run = true;
	this.childProcesses = {};

	cluster.setupMaster({
		args: [JSON.stringify(this.config)]
	});
	
	this.start();
	this.watchFiles();
};
util.inherits(KalturaMainProcess, KalturaServer);

KalturaMainProcess.prototype.start = function(){
	KalturaLogger.log('Starting all child processes');
	this.run = true;
	
	var numOfCores = os.cpus().length;
	var processes = [];
	for (var i = 0; i < numOfCores; i++) {
		var childProcess = this.spawn();
		processes.push(childProcess.process.pid);
		KalturaLogger.log('Started process [' + childProcess.process.pid + ']');
	}
	var serverProcessesKey = this.cache.getServerProcesses();
	var This = this;
	this.cache.get(serverProcessesKey, function(err, data){
		if(data && !err){
			This.restoreServerProcesses(data);
		}
		
		This.storeServerProcesses(processes);
	});
};

KalturaMainProcess.prototype.storeServerProcesses = function(processes){
	var serverProcessesKey = this.cache.getServerProcesses();
	var This = this;
	this.cache.del(serverProcessesKey, function(err){
		This.cache.add(serverProcessesKey, processes, 60, function(err){
			setTimeout(function(){
				This.cache.touch(serverProcessesKey, processes, 60);
			}, 50000);
		});
	});
};

KalturaMainProcess.prototype.restoreServerProcesses = function(processes){
	var This = this;
	for(var i = 0; i < processes.length; i++){
		var pid = processes[i];
		var processActionsKey = this.cache.getProcessActions(pid);
		this.cache.get(processActionsKey, function(err, actions){
			if(actions && !err){
				This.restoreProcessActions(actions);
			}
			This.cache.del(processActionsKey);
		});
	}
};

KalturaMainProcess.prototype.restoreProcessActions = function(actions){
	for(var actionId in actions){
		this.restoreAction(actions[actionId]);
	}
};

KalturaMainProcess.prototype.spawn = function(){
	var childProcess = cluster.fork();
	childProcess.on('exit', this.onProcessExit);
	this.childProcesses[childProcess.process.pid] = childProcess;
	
	return childProcess;
};

KalturaMainProcess.prototype.onProcessExit = function(childProcess, code, signal){
	KalturaLogger.dir(childProcess);
	delete this.childProcesses[childProcess.process.pid];
	KalturaLogger.log('Process died [' + childProcess.process.pid + '] , code [' + code + ']');
	
	if(this.run){
		var childProcess = this.spawn();
		KalturaLogger.log('Restarted process [' + childProcess.process.pid + ']');
	}
};

KalturaMainProcess.prototype.stop = function() {
	KalturaLogger.log('Stopping all child processes');
	this.run = false;
	for ( var pid in this.childProcesses) {
		this.childProcesses[pid].send('stop');
	}
};

KalturaMainProcess.prototype.restart = function() {
	KalturaLogger.log('Restarting all child processes');
	this.stop();
	this.start();
};

KalturaMainProcess.prototype.watchFiles = function() {
	// TODO
};




var KalturaChildProcess = function(){
	KalturaLogger.log('Initializing');
	this.init();
	this.managers = {};
	this.start();
};
util.inherits(KalturaChildProcess, KalturaServer);

KalturaChildProcess.prototype.start = function(){
	var httpPort = this.config.cloud.httpPort;
	KalturaLogger.log('Listening on port [' + httpPort + ']');
	var This = this;
	this.webServer.on('request', function(request, response) {
		return This.handleRequest(request, response);
	});
	this.webServer.listen(httpPort);
};

KalturaChildProcess.prototype.parseUrl = function(str) {
	var urlInfo = url.parse(str);

	var pathParts = urlInfo.pathname.split('/');
	if(pathParts.length < 3)
		return null;

	urlInfo.service = pathParts[1][0].toUpperCase() + pathParts[1].substr(1).toLowerCase();
	urlInfo.action = pathParts[2].toLowerCase();
	urlInfo.params = querystring.parse(urlInfo.query);
	
	var paramName = null;
	for(var i = 3; i < pathParts.length; i++){
		if(paramName == null){
			paramName = pathParts[i];
		}
		else{
			urlInfo.params[paramName] = pathParts[i];
			paramName = null;
		}
	}
	
	return urlInfo;
};

KalturaChildProcess.prototype.handleRequest = function(request, response) {

	response.requestId = this.getUniqueId();
	
	KalturaLogger.log('Request [' + response.requestId + ']: ' + request.url);
    
	response.setHeader("X-Me", this.hostname);
	response.setHeader("X-Kaltura-Session", response.requestId);
	
	var errorMessage = 'Service not found';
	var urlInfo = this.parseUrl(request.url);
	if(urlInfo){

		KalturaLogger.log('Request [' + response.requestId + '] service [' + urlInfo.service + '] action [' + urlInfo.action + ']');

	    var service = this.managers[urlInfo.service];
		if(!service){	
			var serviceClass = 'Kaltura' + urlInfo.service + 'Manager';
			var serviceModule = './managers/' + serviceClass;
			try{
				var module = require(serviceModule);
				service = new module[serviceClass](this.config);
			}
			catch(err){
				KalturaLogger.error(err);
				errorMessage = 'Service [' + urlInfo.service + '] not found';
			}

			if(service){
				if(service[urlInfo.action] && typeof service[urlInfo.action] === 'function'){
					service[urlInfo.action].apply(service, [request, response, urlInfo.params]);
					return;
				}
				errorMessage = 'Action [' + urlInfo.action + '] not found in service [' + urlInfo.service + ']';
			}
		}
	}

	KalturaLogger.error('Request [' + response.requestId + '] ' + errorMessage);
    response.writeHead(404, {
        'Content-type': 'text/plain'
    });
    response.end(errorMessage);
};

module.exports.KalturaMainProcess = KalturaMainProcess;
module.exports.KalturaChildProcess = KalturaChildProcess;