// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2011  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================
var util = require('util');
var kaltura = require('./KalturaClientBase');

/**
 * @param  id  string     (readOnly).
 * @param  cuePointType  string     (readOnly).
 * @param  status  int     (readOnly).
 * @param  entryId  string     (insertOnly).
 * @param  partnerId  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  tags  string    .
 * @param  startTime  int    Start time in milliseconds
 *  	 .
 * @param  userId  string     (readOnly).
 * @param  partnerData  string    .
 * @param  partnerSortValue  int    .
 * @param  forceStop  int    .
 * @param  thumbOffset  int    .
 * @param  systemName  string    .
 */
function KalturaCuePoint(){
  KalturaCuePoint.super_.call(this);
  this.id = null;
  this.cuePointType = null;
  this.status = null;
  this.entryId = null;
  this.partnerId = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.tags = null;
  this.startTime = null;
  this.userId = null;
  this.partnerData = null;
  this.partnerSortValue = null;
  this.forceStop = null;
  this.thumbOffset = null;
  this.systemName = null;
};
module.exports.KalturaCuePoint = KalturaCuePoint;

util.inherits(KalturaCuePoint, kaltura.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCuePointListResponse(){
  KalturaCuePointListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCuePointListResponse = KalturaCuePointListResponse;

util.inherits(KalturaCuePointListResponse, kaltura.KalturaObjectBase);


/**
 */
function KalturaSearchItem(){
  KalturaSearchItem.super_.call(this);
};
module.exports.KalturaSearchItem = KalturaSearchItem;

util.inherits(KalturaSearchItem, kaltura.KalturaObjectBase);


/**
 * @param  orderBy  string    .
 * @param  advancedSearch  KalturaSearchItem    .
 */
function KalturaFilter(){
  KalturaFilter.super_.call(this);
  this.orderBy = null;
  this.advancedSearch = null;
};
module.exports.KalturaFilter = KalturaFilter;

util.inherits(KalturaFilter, kaltura.KalturaObjectBase);


/**
 * @param  pageSize  int    The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *  	 .
 * @param  pageIndex  int    The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *  	 .
 */
function KalturaFilterPager(){
  KalturaFilterPager.super_.call(this);
  this.pageSize = null;
  this.pageIndex = null;
};
module.exports.KalturaFilterPager = KalturaFilterPager;

util.inherits(KalturaFilterPager, kaltura.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 */
function KalturaAccessControlBaseFilter(){
  KalturaAccessControlBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
};
module.exports.KalturaAccessControlBaseFilter = KalturaAccessControlBaseFilter;

util.inherits(KalturaAccessControlBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaAccessControlProfileBaseFilter(){
  KalturaAccessControlProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaAccessControlProfileBaseFilter = KalturaAccessControlProfileBaseFilter;

util.inherits(KalturaAccessControlProfileBaseFilter, KalturaFilter);


/**
 * @param  protocolType  string     (insertOnly).
 * @param  sourceUrl  string    .
 * @param  adType  string    .
 * @param  title  string    .
 * @param  endTime  int    .
 * @param  duration  int    Duration in milliseconds
 *  	  (readOnly).
 */
function KalturaAdCuePoint(){
  KalturaAdCuePoint.super_.call(this);
  this.protocolType = null;
  this.sourceUrl = null;
  this.adType = null;
  this.title = null;
  this.endTime = null;
  this.duration = null;
};
module.exports.KalturaAdCuePoint = KalturaAdCuePoint;

util.inherits(KalturaAdCuePoint, KalturaCuePoint);


/**
 * @param  parentId  string     (insertOnly).
 * @param  text  string    .
 * @param  endTime  int    End time in milliseconds
 *  	 .
 * @param  duration  int    Duration in milliseconds
 *  	  (readOnly).
 * @param  depth  int    Depth in the tree
 *  	  (readOnly).
 * @param  childrenCount  int    Number of all descendants
 *  	  (readOnly).
 * @param  directChildrenCount  int    Number of children, first generation only.
 *  	  (readOnly).
 */
function KalturaAnnotation(){
  KalturaAnnotation.super_.call(this);
  this.parentId = null;
  this.text = null;
  this.endTime = null;
  this.duration = null;
  this.depth = null;
  this.childrenCount = null;
  this.directChildrenCount = null;
};
module.exports.KalturaAnnotation = KalturaAnnotation;

util.inherits(KalturaAnnotation, KalturaCuePoint);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  sizeGreaterThanOrEqual  int    .
 * @param  sizeLessThanOrEqual  int    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  deletedAtGreaterThanOrEqual  int    .
 * @param  deletedAtLessThanOrEqual  int    .
 */
function KalturaAssetBaseFilter(){
  KalturaAssetBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.sizeGreaterThanOrEqual = null;
  this.sizeLessThanOrEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.deletedAtGreaterThanOrEqual = null;
  this.deletedAtLessThanOrEqual = null;
};
module.exports.KalturaAssetBaseFilter = KalturaAssetBaseFilter;

util.inherits(KalturaAssetBaseFilter, KalturaFilter);


/**
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  isSystemDefaultEqual  int    .
 * @param  tagsEqual  string    .
 */
function KalturaAssetParamsBaseFilter(){
  KalturaAssetParamsBaseFilter.super_.call(this);
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.isSystemDefaultEqual = null;
  this.tagsEqual = null;
};
module.exports.KalturaAssetParamsBaseFilter = KalturaAssetParamsBaseFilter;

util.inherits(KalturaAssetParamsBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  parsedAtGreaterThanOrEqual  int    .
 * @param  parsedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  auditObjectTypeEqual  string    .
 * @param  auditObjectTypeIn  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  relatedObjectIdEqual  string    .
 * @param  relatedObjectIdIn  string    .
 * @param  relatedObjectTypeEqual  string    .
 * @param  relatedObjectTypeIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  masterPartnerIdEqual  int    .
 * @param  masterPartnerIdIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  requestIdEqual  string    .
 * @param  requestIdIn  string    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  actionEqual  string    .
 * @param  actionIn  string    .
 * @param  ksEqual  string    .
 * @param  contextEqual  int    .
 * @param  contextIn  string    .
 * @param  entryPointEqual  string    .
 * @param  entryPointIn  string    .
 * @param  serverNameEqual  string    .
 * @param  serverNameIn  string    .
 * @param  ipAddressEqual  string    .
 * @param  ipAddressIn  string    .
 * @param  clientTagEqual  string    .
 */
function KalturaAuditTrailBaseFilter(){
  KalturaAuditTrailBaseFilter.super_.call(this);
  this.idEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.parsedAtGreaterThanOrEqual = null;
  this.parsedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.auditObjectTypeEqual = null;
  this.auditObjectTypeIn = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.relatedObjectIdEqual = null;
  this.relatedObjectIdIn = null;
  this.relatedObjectTypeEqual = null;
  this.relatedObjectTypeIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.masterPartnerIdEqual = null;
  this.masterPartnerIdIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.requestIdEqual = null;
  this.requestIdIn = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.actionEqual = null;
  this.actionIn = null;
  this.ksEqual = null;
  this.contextEqual = null;
  this.contextIn = null;
  this.entryPointEqual = null;
  this.entryPointIn = null;
  this.serverNameEqual = null;
  this.serverNameIn = null;
  this.ipAddressEqual = null;
  this.ipAddressIn = null;
  this.clientTagEqual = null;
};
module.exports.KalturaAuditTrailBaseFilter = KalturaAuditTrailBaseFilter;

util.inherits(KalturaAuditTrailBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    This filter should be in use for retrieving only a specific entry (identified by its entryId).
 *  	 .
 * @param  idIn  string    This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 *  	 .
 * @param  idNotIn  string    .
 * @param  nameLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  nameMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  nameMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  nameEqual  string    This filter should be in use for retrieving entries with a specific name.
 *  	 .
 * @param  partnerIdEqual  int    This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID).
 *  	 .
 * @param  partnerIdIn  string    This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
 *  	 .
 * @param  userIdEqual  string    This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 *  	 .
 * @param  creatorIdEqual  string    .
 * @param  tagsLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  tagsMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  tagsMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  adminTagsLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  adminTagsMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  adminTagsMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  	 .
 * @param  categoriesMatchAnd  string    .
 * @param  categoriesMatchOr  string    All entries within these categories or their child categories.
 *  	 .
 * @param  categoriesNotContains  string    .
 * @param  categoriesIdsMatchAnd  string    .
 * @param  categoriesIdsMatchOr  string    All entries of the categories, excluding their child categories.
 *  	 To include entries of the child categories, use categoryAncestorIdIn, or categoriesMatchOr.
 *  	 .
 * @param  categoriesIdsNotContains  string    .
 * @param  categoriesIdsEmpty  int    .
 * @param  statusEqual  string    This filter should be in use for retrieving only entries, at a specific {.
 * @param  statusNotEqual  string    This filter should be in use for retrieving only entries, not at a specific {.
 * @param  statusIn  string    This filter should be in use for retrieving only entries, at few specific {.
 * @param  statusNotIn  string    This filter should be in use for retrieving only entries, not at few specific {.
 * @param  moderationStatusEqual  int    .
 * @param  moderationStatusNotEqual  int    .
 * @param  moderationStatusIn  string    .
 * @param  moderationStatusNotIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    This filter should be in use for retrieving entries of few {.
 * @param  createdAtGreaterThanOrEqual  int    This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format).
 *  	 .
 * @param  createdAtLessThanOrEqual  int    This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format).
 *  	 .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  totalRankLessThanOrEqual  int    .
 * @param  totalRankGreaterThanOrEqual  int    .
 * @param  groupIdEqual  int    .
 * @param  searchTextMatchAnd  string    This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 *  	 .
 * @param  searchTextMatchOr  string    This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 *  	 .
 * @param  accessControlIdEqual  int    .
 * @param  accessControlIdIn  string    .
 * @param  startDateGreaterThanOrEqual  int    .
 * @param  startDateLessThanOrEqual  int    .
 * @param  startDateGreaterThanOrEqualOrNull  int    .
 * @param  startDateLessThanOrEqualOrNull  int    .
 * @param  endDateGreaterThanOrEqual  int    .
 * @param  endDateLessThanOrEqual  int    .
 * @param  endDateGreaterThanOrEqualOrNull  int    .
 * @param  endDateLessThanOrEqualOrNull  int    .
 * @param  referenceIdEqual  string    .
 * @param  referenceIdIn  string    .
 * @param  replacingEntryIdEqual  string    .
 * @param  replacingEntryIdIn  string    .
 * @param  replacedEntryIdEqual  string    .
 * @param  replacedEntryIdIn  string    .
 * @param  replacementStatusEqual  string    .
 * @param  replacementStatusIn  string    .
 * @param  partnerSortValueGreaterThanOrEqual  int    .
 * @param  partnerSortValueLessThanOrEqual  int    .
 * @param  rootEntryIdEqual  string    .
 * @param  rootEntryIdIn  string    .
 * @param  tagsNameMultiLikeOr  string    .
 * @param  tagsAdminTagsMultiLikeOr  string    .
 * @param  tagsAdminTagsNameMultiLikeOr  string    .
 * @param  tagsNameMultiLikeAnd  string    .
 * @param  tagsAdminTagsMultiLikeAnd  string    .
 * @param  tagsAdminTagsNameMultiLikeAnd  string    .
 */
function KalturaBaseEntryBaseFilter(){
  KalturaBaseEntryBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.idNotIn = null;
  this.nameLike = null;
  this.nameMultiLikeOr = null;
  this.nameMultiLikeAnd = null;
  this.nameEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.userIdEqual = null;
  this.creatorIdEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.adminTagsLike = null;
  this.adminTagsMultiLikeOr = null;
  this.adminTagsMultiLikeAnd = null;
  this.categoriesMatchAnd = null;
  this.categoriesMatchOr = null;
  this.categoriesNotContains = null;
  this.categoriesIdsMatchAnd = null;
  this.categoriesIdsMatchOr = null;
  this.categoriesIdsNotContains = null;
  this.categoriesIdsEmpty = null;
  this.statusEqual = null;
  this.statusNotEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
  this.moderationStatusEqual = null;
  this.moderationStatusNotEqual = null;
  this.moderationStatusIn = null;
  this.moderationStatusNotIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.totalRankLessThanOrEqual = null;
  this.totalRankGreaterThanOrEqual = null;
  this.groupIdEqual = null;
  this.searchTextMatchAnd = null;
  this.searchTextMatchOr = null;
  this.accessControlIdEqual = null;
  this.accessControlIdIn = null;
  this.startDateGreaterThanOrEqual = null;
  this.startDateLessThanOrEqual = null;
  this.startDateGreaterThanOrEqualOrNull = null;
  this.startDateLessThanOrEqualOrNull = null;
  this.endDateGreaterThanOrEqual = null;
  this.endDateLessThanOrEqual = null;
  this.endDateGreaterThanOrEqualOrNull = null;
  this.endDateLessThanOrEqualOrNull = null;
  this.referenceIdEqual = null;
  this.referenceIdIn = null;
  this.replacingEntryIdEqual = null;
  this.replacingEntryIdIn = null;
  this.replacedEntryIdEqual = null;
  this.replacedEntryIdIn = null;
  this.replacementStatusEqual = null;
  this.replacementStatusIn = null;
  this.partnerSortValueGreaterThanOrEqual = null;
  this.partnerSortValueLessThanOrEqual = null;
  this.rootEntryIdEqual = null;
  this.rootEntryIdIn = null;
  this.tagsNameMultiLikeOr = null;
  this.tagsAdminTagsMultiLikeOr = null;
  this.tagsAdminTagsNameMultiLikeOr = null;
  this.tagsNameMultiLikeAnd = null;
  this.tagsAdminTagsMultiLikeAnd = null;
  this.tagsAdminTagsNameMultiLikeAnd = null;
};
module.exports.KalturaBaseEntryBaseFilter = KalturaBaseEntryBaseFilter;

util.inherits(KalturaBaseEntryBaseFilter, KalturaFilter);


/**
 */
function KalturaBaseSyndicationFeedBaseFilter(){
  KalturaBaseSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaBaseSyndicationFeedBaseFilter = KalturaBaseSyndicationFeedBaseFilter;

util.inherits(KalturaBaseSyndicationFeedBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idGreaterThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  partnerIdNotIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  executionAttemptsGreaterThanOrEqual  int    .
 * @param  executionAttemptsLessThanOrEqual  int    .
 * @param  lockVersionGreaterThanOrEqual  int    .
 * @param  lockVersionLessThanOrEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  jobTypeEqual  string    .
 * @param  jobTypeIn  string    .
 * @param  jobTypeNotIn  string    .
 * @param  jobSubTypeEqual  int    .
 * @param  jobSubTypeIn  string    .
 * @param  jobSubTypeNotIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 * @param  priorityGreaterThanOrEqual  int    .
 * @param  priorityLessThanOrEqual  int    .
 * @param  priorityEqual  int    .
 * @param  priorityIn  string    .
 * @param  priorityNotIn  string    .
 * @param  batchVersionGreaterThanOrEqual  int    .
 * @param  batchVersionLessThanOrEqual  int    .
 * @param  batchVersionEqual  int    .
 * @param  queueTimeGreaterThanOrEqual  int    .
 * @param  queueTimeLessThanOrEqual  int    .
 * @param  finishTimeGreaterThanOrEqual  int    .
 * @param  finishTimeLessThanOrEqual  int    .
 * @param  errTypeEqual  int    .
 * @param  errTypeIn  string    .
 * @param  errTypeNotIn  string    .
 * @param  errNumberEqual  int    .
 * @param  errNumberIn  string    .
 * @param  errNumberNotIn  string    .
 * @param  estimatedEffortLessThan  int    .
 * @param  estimatedEffortGreaterThan  int    .
 * @param  urgencyLessThanOrEqual  int    .
 * @param  urgencyGreaterThanOrEqual  int    .
 */
function KalturaBatchJobBaseFilter(){
  KalturaBatchJobBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idGreaterThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.partnerIdNotIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.executionAttemptsGreaterThanOrEqual = null;
  this.executionAttemptsLessThanOrEqual = null;
  this.lockVersionGreaterThanOrEqual = null;
  this.lockVersionLessThanOrEqual = null;
  this.entryIdEqual = null;
  this.jobTypeEqual = null;
  this.jobTypeIn = null;
  this.jobTypeNotIn = null;
  this.jobSubTypeEqual = null;
  this.jobSubTypeIn = null;
  this.jobSubTypeNotIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
  this.priorityGreaterThanOrEqual = null;
  this.priorityLessThanOrEqual = null;
  this.priorityEqual = null;
  this.priorityIn = null;
  this.priorityNotIn = null;
  this.batchVersionGreaterThanOrEqual = null;
  this.batchVersionLessThanOrEqual = null;
  this.batchVersionEqual = null;
  this.queueTimeGreaterThanOrEqual = null;
  this.queueTimeLessThanOrEqual = null;
  this.finishTimeGreaterThanOrEqual = null;
  this.finishTimeLessThanOrEqual = null;
  this.errTypeEqual = null;
  this.errTypeIn = null;
  this.errTypeNotIn = null;
  this.errNumberEqual = null;
  this.errNumberIn = null;
  this.errNumberNotIn = null;
  this.estimatedEffortLessThan = null;
  this.estimatedEffortGreaterThan = null;
  this.urgencyLessThanOrEqual = null;
  this.urgencyGreaterThanOrEqual = null;
};
module.exports.KalturaBatchJobBaseFilter = KalturaBatchJobBaseFilter;

util.inherits(KalturaBatchJobBaseFilter, KalturaFilter);


/**
 * @param  uploadedOnGreaterThanOrEqual  int    .
 * @param  uploadedOnLessThanOrEqual  int    .
 * @param  uploadedOnEqual  int    .
 * @param  statusIn  string    .
 * @param  statusEqual  int    .
 * @param  bulkUploadObjectTypeEqual  string    .
 * @param  bulkUploadObjectTypeIn  string    .
 */
function KalturaBulkUploadBaseFilter(){
  KalturaBulkUploadBaseFilter.super_.call(this);
  this.uploadedOnGreaterThanOrEqual = null;
  this.uploadedOnLessThanOrEqual = null;
  this.uploadedOnEqual = null;
  this.statusIn = null;
  this.statusEqual = null;
  this.bulkUploadObjectTypeEqual = null;
  this.bulkUploadObjectTypeIn = null;
};
module.exports.KalturaBulkUploadBaseFilter = KalturaBulkUploadBaseFilter;

util.inherits(KalturaBulkUploadBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  parentIdEqual  int    .
 * @param  parentIdIn  string    .
 * @param  depthEqual  int    .
 * @param  fullNameEqual  string    .
 * @param  fullNameStartsWith  string    .
 * @param  fullNameIn  string    .
 * @param  fullIdsEqual  string    .
 * @param  fullIdsStartsWith  string    .
 * @param  fullIdsMatchOr  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  appearInListEqual  int    .
 * @param  privacyEqual  int    .
 * @param  privacyIn  string    .
 * @param  inheritanceTypeEqual  int    .
 * @param  inheritanceTypeIn  string    .
 * @param  referenceIdEqual  string    .
 * @param  referenceIdEmpty  int    .
 * @param  contributionPolicyEqual  int    .
 * @param  membersCountGreaterThanOrEqual  int    .
 * @param  membersCountLessThanOrEqual  int    .
 * @param  pendingMembersCountGreaterThanOrEqual  int    .
 * @param  pendingMembersCountLessThanOrEqual  int    .
 * @param  privacyContextEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  inheritedParentIdEqual  int    .
 * @param  inheritedParentIdIn  string    .
 * @param  partnerSortValueGreaterThanOrEqual  int    .
 * @param  partnerSortValueLessThanOrEqual  int    .
 */
function KalturaCategoryBaseFilter(){
  KalturaCategoryBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.parentIdEqual = null;
  this.parentIdIn = null;
  this.depthEqual = null;
  this.fullNameEqual = null;
  this.fullNameStartsWith = null;
  this.fullNameIn = null;
  this.fullIdsEqual = null;
  this.fullIdsStartsWith = null;
  this.fullIdsMatchOr = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.appearInListEqual = null;
  this.privacyEqual = null;
  this.privacyIn = null;
  this.inheritanceTypeEqual = null;
  this.inheritanceTypeIn = null;
  this.referenceIdEqual = null;
  this.referenceIdEmpty = null;
  this.contributionPolicyEqual = null;
  this.membersCountGreaterThanOrEqual = null;
  this.membersCountLessThanOrEqual = null;
  this.pendingMembersCountGreaterThanOrEqual = null;
  this.pendingMembersCountLessThanOrEqual = null;
  this.privacyContextEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.inheritedParentIdEqual = null;
  this.inheritedParentIdIn = null;
  this.partnerSortValueGreaterThanOrEqual = null;
  this.partnerSortValueLessThanOrEqual = null;
};
module.exports.KalturaCategoryBaseFilter = KalturaCategoryBaseFilter;

util.inherits(KalturaCategoryBaseFilter, KalturaFilter);


/**
 * @param  categoriesMatchOr  string    .
 * @param  categoryEntryStatusIn  string    .
 * @param  orderBy  string    .
 * @param  categoryIdEqual  int    .
 */
function KalturaCategoryEntryAdvancedFilter(){
  KalturaCategoryEntryAdvancedFilter.super_.call(this);
  this.categoriesMatchOr = null;
  this.categoryEntryStatusIn = null;
  this.orderBy = null;
  this.categoryIdEqual = null;
};
module.exports.KalturaCategoryEntryAdvancedFilter = KalturaCategoryEntryAdvancedFilter;

util.inherits(KalturaCategoryEntryAdvancedFilter, KalturaSearchItem);


/**
 * @param  categoryIdEqual  int    .
 * @param  categoryIdIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  categoryFullIdsStartsWith  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaCategoryEntryBaseFilter(){
  KalturaCategoryEntryBaseFilter.super_.call(this);
  this.categoryIdEqual = null;
  this.categoryIdIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.categoryFullIdsStartsWith = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaCategoryEntryBaseFilter = KalturaCategoryEntryBaseFilter;

util.inherits(KalturaCategoryEntryBaseFilter, KalturaFilter);


/**
 * @param  memberIdEq  string    .
 * @param  memberIdIn  string    .
 * @param  memberPermissionsMatchOr  string    .
 * @param  memberPermissionsMatchAnd  string    .
 */
function KalturaCategoryUserAdvancedFilter(){
  KalturaCategoryUserAdvancedFilter.super_.call(this);
  this.memberIdEq = null;
  this.memberIdIn = null;
  this.memberPermissionsMatchOr = null;
  this.memberPermissionsMatchAnd = null;
};
module.exports.KalturaCategoryUserAdvancedFilter = KalturaCategoryUserAdvancedFilter;

util.inherits(KalturaCategoryUserAdvancedFilter, KalturaSearchItem);


/**
 * @param  categoryIdEqual  int    .
 * @param  categoryIdIn  string    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  permissionLevelEqual  int    .
 * @param  permissionLevelIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  updateMethodEqual  int    .
 * @param  updateMethodIn  string    .
 * @param  categoryFullIdsStartsWith  string    .
 * @param  categoryFullIdsEqual  string    .
 * @param  permissionNamesMatchAnd  string    .
 * @param  permissionNamesMatchOr  string    .
 * @param  permissionNamesNotContains  string    .
 */
function KalturaCategoryUserBaseFilter(){
  KalturaCategoryUserBaseFilter.super_.call(this);
  this.categoryIdEqual = null;
  this.categoryIdIn = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.permissionLevelEqual = null;
  this.permissionLevelIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.updateMethodEqual = null;
  this.updateMethodIn = null;
  this.categoryFullIdsStartsWith = null;
  this.categoryFullIdsEqual = null;
  this.permissionNamesMatchAnd = null;
  this.permissionNamesMatchOr = null;
  this.permissionNamesNotContains = null;
};
module.exports.KalturaCategoryUserBaseFilter = KalturaCategoryUserBaseFilter;

util.inherits(KalturaCategoryUserBaseFilter, KalturaFilter);


/**
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  updateMethodEqual  int    .
 * @param  updateMethodIn  string    .
 * @param  permissionNamesMatchAnd  string    .
 * @param  permissionNamesMatchOr  string    .
 */
function KalturaCategoryUserProviderFilter(){
  KalturaCategoryUserProviderFilter.super_.call(this);
  this.userIdEqual = null;
  this.userIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.updateMethodEqual = null;
  this.updateMethodIn = null;
  this.permissionNamesMatchAnd = null;
  this.permissionNamesMatchOr = null;
};
module.exports.KalturaCategoryUserProviderFilter = KalturaCategoryUserProviderFilter;

util.inherits(KalturaCategoryUserProviderFilter, KalturaFilter);


/**
 * @param  code  string    .
 * @param  description  string    .
 * @param  endTime  int    .
 * @param  duration  int    Duration in milliseconds
 *  	  (readOnly).
 */
function KalturaCodeCuePoint(){
  KalturaCodeCuePoint.super_.call(this);
  this.code = null;
  this.description = null;
  this.endTime = null;
  this.duration = null;
};
module.exports.KalturaCodeCuePoint = KalturaCodeCuePoint;

util.inherits(KalturaCodeCuePoint, KalturaCuePoint);


/**
 * @param  noDistributionProfiles  bool    .
 * @param  distributionProfileId  int    .
 * @param  distributionSunStatus  int    .
 * @param  entryDistributionFlag  int    .
 * @param  entryDistributionStatus  int    .
 * @param  hasEntryDistributionValidationErrors  bool    .
 * @param  entryDistributionValidationErrors  string    Comma seperated validation error types
 *  	 .
 */
function KalturaContentDistributionSearchItem(){
  KalturaContentDistributionSearchItem.super_.call(this);
  this.noDistributionProfiles = null;
  this.distributionProfileId = null;
  this.distributionSunStatus = null;
  this.entryDistributionFlag = null;
  this.entryDistributionStatus = null;
  this.hasEntryDistributionValidationErrors = null;
  this.entryDistributionValidationErrors = null;
};
module.exports.KalturaContentDistributionSearchItem = KalturaContentDistributionSearchItem;

util.inherits(KalturaContentDistributionSearchItem, KalturaSearchItem);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  createdByIdEqual  int    .
 * @param  typeEqual  int    .
 * @param  typeIn  string    .
 * @param  targetTypeEqual  int    .
 * @param  targetTypeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaControlPanelCommandBaseFilter(){
  KalturaControlPanelCommandBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.createdByIdEqual = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.targetTypeEqual = null;
  this.targetTypeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaControlPanelCommandBaseFilter = KalturaControlPanelCommandBaseFilter;

util.inherits(KalturaControlPanelCommandBaseFilter, KalturaFilter);


/**
 * @param  conversionProfileIdEqual  int    .
 * @param  conversionProfileIdIn  string    .
 * @param  assetParamsIdEqual  int    .
 * @param  assetParamsIdIn  string    .
 * @param  readyBehaviorEqual  int    .
 * @param  readyBehaviorIn  string    .
 * @param  originEqual  int    .
 * @param  originIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
function KalturaConversionProfileAssetParamsBaseFilter(){
  KalturaConversionProfileAssetParamsBaseFilter.super_.call(this);
  this.conversionProfileIdEqual = null;
  this.conversionProfileIdIn = null;
  this.assetParamsIdEqual = null;
  this.assetParamsIdIn = null;
  this.readyBehaviorEqual = null;
  this.readyBehaviorIn = null;
  this.originEqual = null;
  this.originIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
module.exports.KalturaConversionProfileAssetParamsBaseFilter = KalturaConversionProfileAssetParamsBaseFilter;

util.inherits(KalturaConversionProfileAssetParamsBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  statusEqual  string    .
 * @param  statusIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  nameEqual  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  defaultEntryIdEqual  string    .
 * @param  defaultEntryIdIn  string    .
 */
function KalturaConversionProfileBaseFilter(){
  KalturaConversionProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.nameEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.defaultEntryIdEqual = null;
  this.defaultEntryIdIn = null;
};
module.exports.KalturaConversionProfileBaseFilter = KalturaConversionProfileBaseFilter;

util.inherits(KalturaConversionProfileBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  cuePointTypeEqual  string    .
 * @param  cuePointTypeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  startTimeGreaterThanOrEqual  int    .
 * @param  startTimeLessThanOrEqual  int    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  partnerSortValueEqual  int    .
 * @param  partnerSortValueIn  string    .
 * @param  partnerSortValueGreaterThanOrEqual  int    .
 * @param  partnerSortValueLessThanOrEqual  int    .
 * @param  forceStopEqual  int    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
function KalturaCuePointBaseFilter(){
  KalturaCuePointBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.cuePointTypeEqual = null;
  this.cuePointTypeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.startTimeGreaterThanOrEqual = null;
  this.startTimeLessThanOrEqual = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.partnerSortValueEqual = null;
  this.partnerSortValueIn = null;
  this.partnerSortValueGreaterThanOrEqual = null;
  this.partnerSortValueLessThanOrEqual = null;
  this.forceStopEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
module.exports.KalturaCuePointBaseFilter = KalturaCuePointBaseFilter;

util.inherits(KalturaCuePointBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaDistributionProfileBaseFilter(){
  KalturaDistributionProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaDistributionProfileBaseFilter = KalturaDistributionProfileBaseFilter;

util.inherits(KalturaDistributionProfileBaseFilter, KalturaFilter);


/**
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 */
function KalturaDistributionProviderBaseFilter(){
  KalturaDistributionProviderBaseFilter.super_.call(this);
  this.typeEqual = null;
  this.typeIn = null;
};
module.exports.KalturaDistributionProviderBaseFilter = KalturaDistributionProviderBaseFilter;

util.inherits(KalturaDistributionProviderBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  userIdLike  string    .
 * @param  deviceIdLike  string    .
 * @param  versionLike  string    .
 * @param  providerEqual  string    .
 * @param  providerIn  string    .
 * @param  profileIdEqual  int    .
 * @param  profileIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaDrmDeviceBaseFilter(){
  KalturaDrmDeviceBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.userIdLike = null;
  this.deviceIdLike = null;
  this.versionLike = null;
  this.providerEqual = null;
  this.providerIn = null;
  this.profileIdEqual = null;
  this.profileIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaDrmDeviceBaseFilter = KalturaDrmDeviceBaseFilter;

util.inherits(KalturaDrmDeviceBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameLike  string    .
 * @param  systemNameLike  string    .
 * @param  providerEqual  string    .
 * @param  providerIn  string    .
 * @param  profileIdEqual  int    .
 * @param  profileIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  scenarioEqual  string    .
 * @param  scenarioIn  string    .
 */
function KalturaDrmPolicyBaseFilter(){
  KalturaDrmPolicyBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameLike = null;
  this.systemNameLike = null;
  this.providerEqual = null;
  this.providerIn = null;
  this.profileIdEqual = null;
  this.profileIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.scenarioEqual = null;
  this.scenarioIn = null;
};
module.exports.KalturaDrmPolicyBaseFilter = KalturaDrmPolicyBaseFilter;

util.inherits(KalturaDrmPolicyBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameLike  string    .
 * @param  providerEqual  string    .
 * @param  providerIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaDrmProfileBaseFilter(){
  KalturaDrmProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameLike = null;
  this.providerEqual = null;
  this.providerIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaDrmProfileBaseFilter = KalturaDrmProfileBaseFilter;

util.inherits(KalturaDrmProfileBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameLike  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  conversionProfileIdEqual  int    .
 * @param  conversionProfileIdIn  string    .
 * @param  dcEqual  int    .
 * @param  dcIn  string    .
 * @param  pathEqual  string    .
 * @param  pathLike  string    .
 * @param  fileHandlerTypeEqual  string    .
 * @param  fileHandlerTypeIn  string    .
 * @param  fileNamePatternsLike  string    .
 * @param  fileNamePatternsMultiLikeOr  string    .
 * @param  fileNamePatternsMultiLikeAnd  string    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  errorCodeEqual  string    .
 * @param  errorCodeIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaDropFolderBaseFilter(){
  KalturaDropFolderBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameLike = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.conversionProfileIdEqual = null;
  this.conversionProfileIdIn = null;
  this.dcEqual = null;
  this.dcIn = null;
  this.pathEqual = null;
  this.pathLike = null;
  this.fileHandlerTypeEqual = null;
  this.fileHandlerTypeIn = null;
  this.fileNamePatternsLike = null;
  this.fileNamePatternsMultiLikeOr = null;
  this.fileNamePatternsMultiLikeAnd = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.errorCodeEqual = null;
  this.errorCodeIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaDropFolderBaseFilter = KalturaDropFolderBaseFilter;

util.inherits(KalturaDropFolderBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  dropFolderIdEqual  int    .
 * @param  dropFolderIdIn  string    .
 * @param  fileNameEqual  string    .
 * @param  fileNameIn  string    .
 * @param  fileNameLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 * @param  parsedSlugEqual  string    .
 * @param  parsedSlugIn  string    .
 * @param  parsedSlugLike  string    .
 * @param  parsedFlavorEqual  string    .
 * @param  parsedFlavorIn  string    .
 * @param  parsedFlavorLike  string    .
 * @param  leadDropFolderFileIdEqual  int    .
 * @param  deletedDropFolderFileIdEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  errorCodeEqual  string    .
 * @param  errorCodeIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaDropFolderFileBaseFilter(){
  KalturaDropFolderFileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.dropFolderIdEqual = null;
  this.dropFolderIdIn = null;
  this.fileNameEqual = null;
  this.fileNameIn = null;
  this.fileNameLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
  this.parsedSlugEqual = null;
  this.parsedSlugIn = null;
  this.parsedSlugLike = null;
  this.parsedFlavorEqual = null;
  this.parsedFlavorIn = null;
  this.parsedFlavorLike = null;
  this.leadDropFolderFileIdEqual = null;
  this.deletedDropFolderFileIdEqual = null;
  this.entryIdEqual = null;
  this.errorCodeEqual = null;
  this.errorCodeIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaDropFolderFileBaseFilter = KalturaDropFolderFileBaseFilter;

util.inherits(KalturaDropFolderFileBaseFilter, KalturaFilter);


/**
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  string    .
 * @param  statusIn  string    .
 */
function KalturaEntryAttendeeBaseFilter(){
  KalturaEntryAttendeeBaseFilter.super_.call(this);
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaEntryAttendeeBaseFilter = KalturaEntryAttendeeBaseFilter;

util.inherits(KalturaEntryAttendeeBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  submittedAtGreaterThanOrEqual  int    .
 * @param  submittedAtLessThanOrEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  distributionProfileIdEqual  int    .
 * @param  distributionProfileIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  dirtyStatusEqual  int    .
 * @param  dirtyStatusIn  string    .
 * @param  sunriseGreaterThanOrEqual  int    .
 * @param  sunriseLessThanOrEqual  int    .
 * @param  sunsetGreaterThanOrEqual  int    .
 * @param  sunsetLessThanOrEqual  int    .
 */
function KalturaEntryDistributionBaseFilter(){
  KalturaEntryDistributionBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.submittedAtGreaterThanOrEqual = null;
  this.submittedAtLessThanOrEqual = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.distributionProfileIdEqual = null;
  this.distributionProfileIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.dirtyStatusEqual = null;
  this.dirtyStatusIn = null;
  this.sunriseGreaterThanOrEqual = null;
  this.sunriseLessThanOrEqual = null;
  this.sunsetGreaterThanOrEqual = null;
  this.sunsetLessThanOrEqual = null;
};
module.exports.KalturaEntryDistributionBaseFilter = KalturaEntryDistributionBaseFilter;

util.inherits(KalturaEntryDistributionBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaEventNotificationTemplateBaseFilter(){
  KalturaEventNotificationTemplateBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaEventNotificationTemplateBaseFilter = KalturaEventNotificationTemplateBaseFilter;

util.inherits(KalturaEventNotificationTemplateBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  fileAssetObjectTypeEqual  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  string    .
 * @param  statusIn  string    .
 */
function KalturaFileAssetBaseFilter(){
  KalturaFileAssetBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.fileAssetObjectTypeEqual = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaFileAssetBaseFilter = KalturaFileAssetBaseFilter;

util.inherits(KalturaFileAssetBaseFilter, KalturaFilter);


/**
 * @param  partnerIdEqual  int    .
 * @param  fileObjectTypeEqual  string    .
 * @param  fileObjectTypeIn  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  versionEqual  string    .
 * @param  versionIn  string    .
 * @param  objectSubTypeEqual  int    .
 * @param  objectSubTypeIn  string    .
 * @param  dcEqual  string    .
 * @param  dcIn  string    .
 * @param  originalEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  readyAtGreaterThanOrEqual  int    .
 * @param  readyAtLessThanOrEqual  int    .
 * @param  syncTimeGreaterThanOrEqual  int    .
 * @param  syncTimeLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  fileTypeEqual  int    .
 * @param  fileTypeIn  string    .
 * @param  linkedIdEqual  int    .
 * @param  linkCountGreaterThanOrEqual  int    .
 * @param  linkCountLessThanOrEqual  int    .
 * @param  fileSizeGreaterThanOrEqual  float    .
 * @param  fileSizeLessThanOrEqual  float    .
 */
function KalturaFileSyncBaseFilter(){
  KalturaFileSyncBaseFilter.super_.call(this);
  this.partnerIdEqual = null;
  this.fileObjectTypeEqual = null;
  this.fileObjectTypeIn = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.versionEqual = null;
  this.versionIn = null;
  this.objectSubTypeEqual = null;
  this.objectSubTypeIn = null;
  this.dcEqual = null;
  this.dcIn = null;
  this.originalEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.readyAtGreaterThanOrEqual = null;
  this.readyAtLessThanOrEqual = null;
  this.syncTimeGreaterThanOrEqual = null;
  this.syncTimeLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.fileTypeEqual = null;
  this.fileTypeIn = null;
  this.linkedIdEqual = null;
  this.linkCountGreaterThanOrEqual = null;
  this.linkCountLessThanOrEqual = null;
  this.fileSizeGreaterThanOrEqual = null;
  this.fileSizeLessThanOrEqual = null;
};
module.exports.KalturaFileSyncBaseFilter = KalturaFileSyncBaseFilter;

util.inherits(KalturaFileSyncBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  genericDistributionProviderIdEqual  int    .
 * @param  genericDistributionProviderIdIn  string    .
 * @param  actionEqual  int    .
 * @param  actionIn  string    .
 */
function KalturaGenericDistributionProviderActionBaseFilter(){
  KalturaGenericDistributionProviderActionBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.genericDistributionProviderIdEqual = null;
  this.genericDistributionProviderIdIn = null;
  this.actionEqual = null;
  this.actionIn = null;
};
module.exports.KalturaGenericDistributionProviderActionBaseFilter = KalturaGenericDistributionProviderActionBaseFilter;

util.inherits(KalturaGenericDistributionProviderActionBaseFilter, KalturaFilter);


/**
 * @param  indexIdGreaterThan  int    .
 */
function KalturaIndexAdvancedFilter(){
  KalturaIndexAdvancedFilter.super_.call(this);
  this.indexIdGreaterThan = null;
};
module.exports.KalturaIndexAdvancedFilter = KalturaIndexAdvancedFilter;

util.inherits(KalturaIndexAdvancedFilter, KalturaSearchItem);


/**
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  string    .
 * @param  statusIn  string    .
 * @param  channelIdEqual  string    .
 * @param  channelIdIn  string    .
 * @param  startTimeGreaterThanOrEqual  float    .
 * @param  startTimeLessThanOrEqual  float    .
 */
function KalturaLiveChannelSegmentBaseFilter(){
  KalturaLiveChannelSegmentBaseFilter.super_.call(this);
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.channelIdEqual = null;
  this.channelIdIn = null;
  this.startTimeGreaterThanOrEqual = null;
  this.startTimeLessThanOrEqual = null;
};
module.exports.KalturaLiveChannelSegmentBaseFilter = KalturaLiveChannelSegmentBaseFilter;

util.inherits(KalturaLiveChannelSegmentBaseFilter, KalturaFilter);


/**
 * @param  flavorAssetIdEqual  string    .
 */
function KalturaMediaInfoBaseFilter(){
  KalturaMediaInfoBaseFilter.super_.call(this);
  this.flavorAssetIdEqual = null;
};
module.exports.KalturaMediaInfoBaseFilter = KalturaMediaInfoBaseFilter;

util.inherits(KalturaMediaInfoBaseFilter, KalturaFilter);


/**
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaMediaServerBaseFilter(){
  KalturaMediaServerBaseFilter.super_.call(this);
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaMediaServerBaseFilter = KalturaMediaServerBaseFilter;

util.inherits(KalturaMediaServerBaseFilter, KalturaFilter);


/**
 * @param  partnerIdEqual  int    .
 * @param  metadataProfileIdEqual  int    .
 * @param  metadataProfileVersionEqual  int    .
 * @param  metadataProfileVersionGreaterThanOrEqual  int    .
 * @param  metadataProfileVersionLessThanOrEqual  int    .
 * @param  metadataObjectTypeEqual  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  versionEqual  int    .
 * @param  versionGreaterThanOrEqual  int    .
 * @param  versionLessThanOrEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaMetadataBaseFilter(){
  KalturaMetadataBaseFilter.super_.call(this);
  this.partnerIdEqual = null;
  this.metadataProfileIdEqual = null;
  this.metadataProfileVersionEqual = null;
  this.metadataProfileVersionGreaterThanOrEqual = null;
  this.metadataProfileVersionLessThanOrEqual = null;
  this.metadataObjectTypeEqual = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.versionEqual = null;
  this.versionGreaterThanOrEqual = null;
  this.versionLessThanOrEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaMetadataBaseFilter = KalturaMetadataBaseFilter;

util.inherits(KalturaMetadataBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  metadataObjectTypeEqual  string    .
 * @param  metadataObjectTypeIn  string    .
 * @param  versionEqual  int    .
 * @param  nameEqual  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createModeEqual  int    .
 * @param  createModeNotEqual  int    .
 * @param  createModeIn  string    .
 * @param  createModeNotIn  string    .
 */
function KalturaMetadataProfileBaseFilter(){
  KalturaMetadataProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.partnerIdEqual = null;
  this.metadataObjectTypeEqual = null;
  this.metadataObjectTypeIn = null;
  this.versionEqual = null;
  this.nameEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createModeEqual = null;
  this.createModeNotEqual = null;
  this.createModeIn = null;
  this.createModeNotIn = null;
};
module.exports.KalturaMetadataProfileBaseFilter = KalturaMetadataProfileBaseFilter;

util.inherits(KalturaMetadataProfileBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  idNotIn  string    .
 * @param  nameLike  string    .
 * @param  nameMultiLikeOr  string    .
 * @param  nameMultiLikeAnd  string    .
 * @param  nameEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerPackageEqual  int    .
 * @param  partnerPackageGreaterThanOrEqual  int    .
 * @param  partnerPackageLessThanOrEqual  int    .
 * @param  partnerGroupTypeEqual  int    .
 * @param  partnerNameDescriptionWebsiteAdminNameAdminEmailLike  string    .
 */
function KalturaPartnerBaseFilter(){
  KalturaPartnerBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.idNotIn = null;
  this.nameLike = null;
  this.nameMultiLikeOr = null;
  this.nameMultiLikeAnd = null;
  this.nameEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerPackageEqual = null;
  this.partnerPackageGreaterThanOrEqual = null;
  this.partnerPackageLessThanOrEqual = null;
  this.partnerGroupTypeEqual = null;
  this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
};
module.exports.KalturaPartnerBaseFilter = KalturaPartnerBaseFilter;

util.inherits(KalturaPartnerBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  typeEqual  int    .
 * @param  typeIn  string    .
 * @param  nameEqual  string    .
 * @param  nameIn  string    .
 * @param  friendlyNameLike  string    .
 * @param  descriptionLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  dependsOnPermissionNamesMultiLikeOr  string    .
 * @param  dependsOnPermissionNamesMultiLikeAnd  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaPermissionBaseFilter(){
  KalturaPermissionBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.nameEqual = null;
  this.nameIn = null;
  this.friendlyNameLike = null;
  this.descriptionLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.dependsOnPermissionNamesMultiLikeOr = null;
  this.dependsOnPermissionNamesMultiLikeAnd = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaPermissionBaseFilter = KalturaPermissionBaseFilter;

util.inherits(KalturaPermissionBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaPermissionItemBaseFilter(){
  KalturaPermissionItemBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaPermissionItemBaseFilter = KalturaPermissionItemBaseFilter;

util.inherits(KalturaPermissionItemBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
function KalturaReportBaseFilter(){
  KalturaReportBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
module.exports.KalturaReportBaseFilter = KalturaReportBaseFilter;

util.inherits(KalturaReportBaseFilter, KalturaFilter);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
function KalturaSearchCondition(){
  KalturaSearchCondition.super_.call(this);
  this.field = null;
  this.value = null;
};
module.exports.KalturaSearchCondition = KalturaSearchCondition;

util.inherits(KalturaSearchCondition, KalturaSearchItem);


/**
 * @param  type  int    .
 * @param  items  array    .
 */
function KalturaSearchOperator(){
  KalturaSearchOperator.super_.call(this);
  this.type = null;
  this.items = null;
};
module.exports.KalturaSearchOperator = KalturaSearchOperator;

util.inherits(KalturaSearchOperator, KalturaSearchItem);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  expiresAtGreaterThanOrEqual  int    .
 * @param  expiresAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaShortLinkBaseFilter(){
  KalturaShortLinkBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.expiresAtGreaterThanOrEqual = null;
  this.expiresAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaShortLinkBaseFilter = KalturaShortLinkBaseFilter;

util.inherits(KalturaShortLinkBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  protocolEqual  string    .
 * @param  protocolIn  string    .
 */
function KalturaStorageProfileBaseFilter(){
  KalturaStorageProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.protocolEqual = null;
  this.protocolIn = null;
};
module.exports.KalturaStorageProfileBaseFilter = KalturaStorageProfileBaseFilter;

util.inherits(KalturaStorageProfileBaseFilter, KalturaFilter);


/**
 * @param  fromDate  int    Date range from
 *  	 .
 * @param  toDate  int    Date range to
 *  	 .
 * @param  timezoneOffset  int    Time zone offset
 *  	 .
 */
function KalturaSystemPartnerUsageFilter(){
  KalturaSystemPartnerUsageFilter.super_.call(this);
  this.fromDate = null;
  this.toDate = null;
  this.timezoneOffset = null;
};
module.exports.KalturaSystemPartnerUsageFilter = KalturaSystemPartnerUsageFilter;

util.inherits(KalturaSystemPartnerUsageFilter, KalturaFilter);


/**
 * @param  objectTypeEqual  string    .
 * @param  tagEqual  string    .
 * @param  tagStartsWith  string    .
 * @param  instanceCountEqual  int    .
 * @param  instanceCountIn  int    .
 */
function KalturaTagFilter(){
  KalturaTagFilter.super_.call(this);
  this.objectTypeEqual = null;
  this.tagEqual = null;
  this.tagStartsWith = null;
  this.instanceCountEqual = null;
  this.instanceCountIn = null;
};
module.exports.KalturaTagFilter = KalturaTagFilter;

util.inherits(KalturaTagFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  nameLike  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  objTypeEqual  int    .
 * @param  objTypeIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  creationModeEqual  int    .
 * @param  creationModeIn  string    .
 * @param  versionEqual  string    .
 * @param  versionMultiLikeOr  string    .
 * @param  versionMultiLikeAnd  string    .
 * @param  partnerTagsMultiLikeOr  string    .
 * @param  partnerTagsMultiLikeAnd  string    .
 */
function KalturaUiConfBaseFilter(){
  KalturaUiConfBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.nameLike = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.objTypeEqual = null;
  this.objTypeIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.creationModeEqual = null;
  this.creationModeIn = null;
  this.versionEqual = null;
  this.versionMultiLikeOr = null;
  this.versionMultiLikeAnd = null;
  this.partnerTagsMultiLikeOr = null;
  this.partnerTagsMultiLikeAnd = null;
};
module.exports.KalturaUiConfBaseFilter = KalturaUiConfBaseFilter;

util.inherits(KalturaUiConfBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  userIdEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  fileNameEqual  string    .
 * @param  fileSizeEqual  float    .
 */
function KalturaUploadTokenBaseFilter(){
  KalturaUploadTokenBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.userIdEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.fileNameEqual = null;
  this.fileSizeEqual = null;
};
module.exports.KalturaUploadTokenBaseFilter = KalturaUploadTokenBaseFilter;

util.inherits(KalturaUploadTokenBaseFilter, KalturaFilter);


/**
 * @param  partnerIdEqual  int    .
 * @param  screenNameLike  string    .
 * @param  screenNameStartsWith  string    .
 * @param  emailLike  string    .
 * @param  emailStartsWith  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  firstNameStartsWith  string    .
 * @param  lastNameStartsWith  string    .
 * @param  isAdminEqual  int    .
 */
function KalturaUserBaseFilter(){
  KalturaUserBaseFilter.super_.call(this);
  this.partnerIdEqual = null;
  this.screenNameLike = null;
  this.screenNameStartsWith = null;
  this.emailLike = null;
  this.emailStartsWith = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.firstNameStartsWith = null;
  this.lastNameStartsWith = null;
  this.isAdminEqual = null;
};
module.exports.KalturaUserBaseFilter = KalturaUserBaseFilter;

util.inherits(KalturaUserBaseFilter, KalturaFilter);


/**
 * @param  loginEmailEqual  string    .
 */
function KalturaUserLoginDataBaseFilter(){
  KalturaUserLoginDataBaseFilter.super_.call(this);
  this.loginEmailEqual = null;
};
module.exports.KalturaUserLoginDataBaseFilter = KalturaUserLoginDataBaseFilter;

util.inherits(KalturaUserLoginDataBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  nameEqual  string    .
 * @param  nameIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  descriptionLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
function KalturaUserRoleBaseFilter(){
  KalturaUserRoleBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.nameEqual = null;
  this.nameIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.descriptionLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
module.exports.KalturaUserRoleBaseFilter = KalturaUserRoleBaseFilter;

util.inherits(KalturaUserRoleBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameEqual  string    .
 * @param  nameLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  engineTypeEqual  string    .
 * @param  engineTypeIn  string    .
 */
function KalturaVirusScanProfileBaseFilter(){
  KalturaVirusScanProfileBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameEqual = null;
  this.nameLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.engineTypeEqual = null;
  this.engineTypeIn = null;
};
module.exports.KalturaVirusScanProfileBaseFilter = KalturaVirusScanProfileBaseFilter;

util.inherits(KalturaVirusScanProfileBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  sourceWidgetIdEqual  string    .
 * @param  rootWidgetIdEqual  string    .
 * @param  partnerIdEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  uiConfIdEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerDataLike  string    .
 */
function KalturaWidgetBaseFilter(){
  KalturaWidgetBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.sourceWidgetIdEqual = null;
  this.rootWidgetIdEqual = null;
  this.partnerIdEqual = null;
  this.entryIdEqual = null;
  this.uiConfIdEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerDataLike = null;
};
module.exports.KalturaWidgetBaseFilter = KalturaWidgetBaseFilter;

util.inherits(KalturaWidgetBaseFilter, KalturaFilter);


/**
 */
function KalturaAccessControlFilter(){
  KalturaAccessControlFilter.super_.call(this);
};
module.exports.KalturaAccessControlFilter = KalturaAccessControlFilter;

util.inherits(KalturaAccessControlFilter, KalturaAccessControlBaseFilter);


/**
 */
function KalturaAccessControlProfileFilter(){
  KalturaAccessControlProfileFilter.super_.call(this);
};
module.exports.KalturaAccessControlProfileFilter = KalturaAccessControlProfileFilter;

util.inherits(KalturaAccessControlProfileFilter, KalturaAccessControlProfileBaseFilter);


/**
 */
function KalturaAssetFilter(){
  KalturaAssetFilter.super_.call(this);
};
module.exports.KalturaAssetFilter = KalturaAssetFilter;

util.inherits(KalturaAssetFilter, KalturaAssetBaseFilter);


/**
 */
function KalturaAssetParamsFilter(){
  KalturaAssetParamsFilter.super_.call(this);
};
module.exports.KalturaAssetParamsFilter = KalturaAssetParamsFilter;

util.inherits(KalturaAssetParamsFilter, KalturaAssetParamsBaseFilter);


/**
 */
function KalturaAuditTrailFilter(){
  KalturaAuditTrailFilter.super_.call(this);
};
module.exports.KalturaAuditTrailFilter = KalturaAuditTrailFilter;

util.inherits(KalturaAuditTrailFilter, KalturaAuditTrailBaseFilter);


/**
 * @param  freeText  string    .
 * @param  isRoot  int    .
 * @param  categoriesFullNameIn  string    .
 * @param  categoryAncestorIdIn  string    All entries within this categoy or in child categories  
 *  	 .
 * @param  redirectFromEntryId  string    The id of the original entry
 *  	 .
 */
function KalturaBaseEntryFilter(){
  KalturaBaseEntryFilter.super_.call(this);
  this.freeText = null;
  this.isRoot = null;
  this.categoriesFullNameIn = null;
  this.categoryAncestorIdIn = null;
  this.redirectFromEntryId = null;
};
module.exports.KalturaBaseEntryFilter = KalturaBaseEntryFilter;

util.inherits(KalturaBaseEntryFilter, KalturaBaseEntryBaseFilter);


/**
 */
function KalturaBaseSyndicationFeedFilter(){
  KalturaBaseSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaBaseSyndicationFeedFilter = KalturaBaseSyndicationFeedFilter;

util.inherits(KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedBaseFilter);


/**
 */
function KalturaBatchJobFilter(){
  KalturaBatchJobFilter.super_.call(this);
};
module.exports.KalturaBatchJobFilter = KalturaBatchJobFilter;

util.inherits(KalturaBatchJobFilter, KalturaBatchJobBaseFilter);


/**
 */
function KalturaBulkUploadFilter(){
  KalturaBulkUploadFilter.super_.call(this);
};
module.exports.KalturaBulkUploadFilter = KalturaBulkUploadFilter;

util.inherits(KalturaBulkUploadFilter, KalturaBulkUploadBaseFilter);


/**
 */
function KalturaCategoryEntryFilter(){
  KalturaCategoryEntryFilter.super_.call(this);
};
module.exports.KalturaCategoryEntryFilter = KalturaCategoryEntryFilter;

util.inherits(KalturaCategoryEntryFilter, KalturaCategoryEntryBaseFilter);


/**
 * @param  freeText  string    .
 * @param  membersIn  string    .
 * @param  nameOrReferenceIdStartsWith  string    .
 * @param  managerEqual  string    .
 * @param  memberEqual  string    .
 * @param  fullNameStartsWithIn  string    .
 * @param  ancestorIdIn  string    not includes the category itself (only sub categories)
 *  	 .
 * @param  idOrInheritedParentIdIn  string    .
 */
function KalturaCategoryFilter(){
  KalturaCategoryFilter.super_.call(this);
  this.freeText = null;
  this.membersIn = null;
  this.nameOrReferenceIdStartsWith = null;
  this.managerEqual = null;
  this.memberEqual = null;
  this.fullNameStartsWithIn = null;
  this.ancestorIdIn = null;
  this.idOrInheritedParentIdIn = null;
};
module.exports.KalturaCategoryFilter = KalturaCategoryFilter;

util.inherits(KalturaCategoryFilter, KalturaCategoryBaseFilter);


/**
 * @param  categoryDirectMembers  bool    Return the list of categoryUser that are not inherited from parent category - only the direct categoryUsers.
 *  	 .
 * @param  freeText  string    Free text search on user id or screen name
 *  	 .
 */
function KalturaCategoryUserFilter(){
  KalturaCategoryUserFilter.super_.call(this);
  this.categoryDirectMembers = null;
  this.freeText = null;
};
module.exports.KalturaCategoryUserFilter = KalturaCategoryUserFilter;

util.inherits(KalturaCategoryUserFilter, KalturaCategoryUserBaseFilter);


/**
 */
function KalturaControlPanelCommandFilter(){
  KalturaControlPanelCommandFilter.super_.call(this);
};
module.exports.KalturaControlPanelCommandFilter = KalturaControlPanelCommandFilter;

util.inherits(KalturaControlPanelCommandFilter, KalturaControlPanelCommandBaseFilter);


/**
 */
function KalturaConversionProfileFilter(){
  KalturaConversionProfileFilter.super_.call(this);
};
module.exports.KalturaConversionProfileFilter = KalturaConversionProfileFilter;

util.inherits(KalturaConversionProfileFilter, KalturaConversionProfileBaseFilter);


/**
 * @param  conversionProfileIdFilter  KalturaConversionProfileFilter    .
 * @param  assetParamsIdFilter  KalturaAssetParamsFilter    .
 */
function KalturaConversionProfileAssetParamsFilter(){
  KalturaConversionProfileAssetParamsFilter.super_.call(this);
  this.conversionProfileIdFilter = null;
  this.assetParamsIdFilter = null;
};
module.exports.KalturaConversionProfileAssetParamsFilter = KalturaConversionProfileAssetParamsFilter;

util.inherits(KalturaConversionProfileAssetParamsFilter, KalturaConversionProfileAssetParamsBaseFilter);


/**
 */
function KalturaCuePointFilter(){
  KalturaCuePointFilter.super_.call(this);
};
module.exports.KalturaCuePointFilter = KalturaCuePointFilter;

util.inherits(KalturaCuePointFilter, KalturaCuePointBaseFilter);


/**
 */
function KalturaDistributionProfileFilter(){
  KalturaDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaDistributionProfileFilter = KalturaDistributionProfileFilter;

util.inherits(KalturaDistributionProfileFilter, KalturaDistributionProfileBaseFilter);


/**
 */
function KalturaDistributionProviderFilter(){
  KalturaDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaDistributionProviderFilter = KalturaDistributionProviderFilter;

util.inherits(KalturaDistributionProviderFilter, KalturaDistributionProviderBaseFilter);


/**
 */
function KalturaDrmDeviceFilter(){
  KalturaDrmDeviceFilter.super_.call(this);
};
module.exports.KalturaDrmDeviceFilter = KalturaDrmDeviceFilter;

util.inherits(KalturaDrmDeviceFilter, KalturaDrmDeviceBaseFilter);


/**
 */
function KalturaDrmPolicyFilter(){
  KalturaDrmPolicyFilter.super_.call(this);
};
module.exports.KalturaDrmPolicyFilter = KalturaDrmPolicyFilter;

util.inherits(KalturaDrmPolicyFilter, KalturaDrmPolicyBaseFilter);


/**
 */
function KalturaDrmProfileFilter(){
  KalturaDrmProfileFilter.super_.call(this);
};
module.exports.KalturaDrmProfileFilter = KalturaDrmProfileFilter;

util.inherits(KalturaDrmProfileFilter, KalturaDrmProfileBaseFilter);


/**
 */
function KalturaDropFolderFileFilter(){
  KalturaDropFolderFileFilter.super_.call(this);
};
module.exports.KalturaDropFolderFileFilter = KalturaDropFolderFileFilter;

util.inherits(KalturaDropFolderFileFilter, KalturaDropFolderFileBaseFilter);


/**
 * @param  currentDc  int    .
 */
function KalturaDropFolderFilter(){
  KalturaDropFolderFilter.super_.call(this);
  this.currentDc = null;
};
module.exports.KalturaDropFolderFilter = KalturaDropFolderFilter;

util.inherits(KalturaDropFolderFilter, KalturaDropFolderBaseFilter);


/**
 */
function KalturaEntryAttendeeFilter(){
  KalturaEntryAttendeeFilter.super_.call(this);
};
module.exports.KalturaEntryAttendeeFilter = KalturaEntryAttendeeFilter;

util.inherits(KalturaEntryAttendeeFilter, KalturaEntryAttendeeBaseFilter);


/**
 */
function KalturaEntryDistributionFilter(){
  KalturaEntryDistributionFilter.super_.call(this);
};
module.exports.KalturaEntryDistributionFilter = KalturaEntryDistributionFilter;

util.inherits(KalturaEntryDistributionFilter, KalturaEntryDistributionBaseFilter);


/**
 */
function KalturaEventNotificationTemplateFilter(){
  KalturaEventNotificationTemplateFilter.super_.call(this);
};
module.exports.KalturaEventNotificationTemplateFilter = KalturaEventNotificationTemplateFilter;

util.inherits(KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateBaseFilter);


/**
 */
function KalturaFileAssetFilter(){
  KalturaFileAssetFilter.super_.call(this);
};
module.exports.KalturaFileAssetFilter = KalturaFileAssetFilter;

util.inherits(KalturaFileAssetFilter, KalturaFileAssetBaseFilter);


/**
 */
function KalturaFileSyncFilter(){
  KalturaFileSyncFilter.super_.call(this);
};
module.exports.KalturaFileSyncFilter = KalturaFileSyncFilter;

util.inherits(KalturaFileSyncFilter, KalturaFileSyncBaseFilter);


/**
 */
function KalturaGenericDistributionProviderActionFilter(){
  KalturaGenericDistributionProviderActionFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProviderActionFilter = KalturaGenericDistributionProviderActionFilter;

util.inherits(KalturaGenericDistributionProviderActionFilter, KalturaGenericDistributionProviderActionBaseFilter);


/**
 */
function KalturaLiveChannelSegmentFilter(){
  KalturaLiveChannelSegmentFilter.super_.call(this);
};
module.exports.KalturaLiveChannelSegmentFilter = KalturaLiveChannelSegmentFilter;

util.inherits(KalturaLiveChannelSegmentFilter, KalturaLiveChannelSegmentBaseFilter);


/**
 */
function KalturaMediaInfoFilter(){
  KalturaMediaInfoFilter.super_.call(this);
};
module.exports.KalturaMediaInfoFilter = KalturaMediaInfoFilter;

util.inherits(KalturaMediaInfoFilter, KalturaMediaInfoBaseFilter);


/**
 */
function KalturaMediaServerFilter(){
  KalturaMediaServerFilter.super_.call(this);
};
module.exports.KalturaMediaServerFilter = KalturaMediaServerFilter;

util.inherits(KalturaMediaServerFilter, KalturaMediaServerBaseFilter);


/**
 */
function KalturaMetadataFilter(){
  KalturaMetadataFilter.super_.call(this);
};
module.exports.KalturaMetadataFilter = KalturaMetadataFilter;

util.inherits(KalturaMetadataFilter, KalturaMetadataBaseFilter);


/**
 */
function KalturaMetadataProfileFilter(){
  KalturaMetadataProfileFilter.super_.call(this);
};
module.exports.KalturaMetadataProfileFilter = KalturaMetadataProfileFilter;

util.inherits(KalturaMetadataProfileFilter, KalturaMetadataProfileBaseFilter);


/**
 * @param  metadataProfileId  int    .
 * @param  orderBy  string    .
 */
function KalturaMetadataSearchItem(){
  KalturaMetadataSearchItem.super_.call(this);
  this.metadataProfileId = null;
  this.orderBy = null;
};
module.exports.KalturaMetadataSearchItem = KalturaMetadataSearchItem;

util.inherits(KalturaMetadataSearchItem, KalturaSearchOperator);


/**
 */
function KalturaPartnerFilter(){
  KalturaPartnerFilter.super_.call(this);
};
module.exports.KalturaPartnerFilter = KalturaPartnerFilter;

util.inherits(KalturaPartnerFilter, KalturaPartnerBaseFilter);


/**
 */
function KalturaPermissionFilter(){
  KalturaPermissionFilter.super_.call(this);
};
module.exports.KalturaPermissionFilter = KalturaPermissionFilter;

util.inherits(KalturaPermissionFilter, KalturaPermissionBaseFilter);


/**
 */
function KalturaPermissionItemFilter(){
  KalturaPermissionItemFilter.super_.call(this);
};
module.exports.KalturaPermissionItemFilter = KalturaPermissionItemFilter;

util.inherits(KalturaPermissionItemFilter, KalturaPermissionItemBaseFilter);


/**
 */
function KalturaReportFilter(){
  KalturaReportFilter.super_.call(this);
};
module.exports.KalturaReportFilter = KalturaReportFilter;

util.inherits(KalturaReportFilter, KalturaReportBaseFilter);


/**
 * @param  comparison  string    .
 */
function KalturaSearchComparableCondition(){
  KalturaSearchComparableCondition.super_.call(this);
  this.comparison = null;
};
module.exports.KalturaSearchComparableCondition = KalturaSearchComparableCondition;

util.inherits(KalturaSearchComparableCondition, KalturaSearchCondition);


/**
 */
function KalturaShortLinkFilter(){
  KalturaShortLinkFilter.super_.call(this);
};
module.exports.KalturaShortLinkFilter = KalturaShortLinkFilter;

util.inherits(KalturaShortLinkFilter, KalturaShortLinkBaseFilter);


/**
 */
function KalturaStorageProfileFilter(){
  KalturaStorageProfileFilter.super_.call(this);
};
module.exports.KalturaStorageProfileFilter = KalturaStorageProfileFilter;

util.inherits(KalturaStorageProfileFilter, KalturaStorageProfileBaseFilter);


/**
 */
function KalturaUiConfFilter(){
  KalturaUiConfFilter.super_.call(this);
};
module.exports.KalturaUiConfFilter = KalturaUiConfFilter;

util.inherits(KalturaUiConfFilter, KalturaUiConfBaseFilter);


/**
 */
function KalturaUploadTokenFilter(){
  KalturaUploadTokenFilter.super_.call(this);
};
module.exports.KalturaUploadTokenFilter = KalturaUploadTokenFilter;

util.inherits(KalturaUploadTokenFilter, KalturaUploadTokenBaseFilter);


/**
 * @param  idOrScreenNameStartsWith  string    .
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  loginEnabledEqual  int    .
 * @param  roleIdEqual  string    .
 * @param  roleIdsEqual  string    .
 * @param  roleIdsIn  string    .
 * @param  firstNameOrLastNameStartsWith  string    .
 * @param  permissionNamesMultiLikeOr  string    Permission names filter expression
 *  	 .
 * @param  permissionNamesMultiLikeAnd  string    Permission names filter expression
 *  	 .
 */
function KalturaUserFilter(){
  KalturaUserFilter.super_.call(this);
  this.idOrScreenNameStartsWith = null;
  this.idEqual = null;
  this.idIn = null;
  this.loginEnabledEqual = null;
  this.roleIdEqual = null;
  this.roleIdsEqual = null;
  this.roleIdsIn = null;
  this.firstNameOrLastNameStartsWith = null;
  this.permissionNamesMultiLikeOr = null;
  this.permissionNamesMultiLikeAnd = null;
};
module.exports.KalturaUserFilter = KalturaUserFilter;

util.inherits(KalturaUserFilter, KalturaUserBaseFilter);


/**
 */
function KalturaUserLoginDataFilter(){
  KalturaUserLoginDataFilter.super_.call(this);
};
module.exports.KalturaUserLoginDataFilter = KalturaUserLoginDataFilter;

util.inherits(KalturaUserLoginDataFilter, KalturaUserLoginDataBaseFilter);


/**
 */
function KalturaUserRoleFilter(){
  KalturaUserRoleFilter.super_.call(this);
};
module.exports.KalturaUserRoleFilter = KalturaUserRoleFilter;

util.inherits(KalturaUserRoleFilter, KalturaUserRoleBaseFilter);


/**
 */
function KalturaVirusScanProfileFilter(){
  KalturaVirusScanProfileFilter.super_.call(this);
};
module.exports.KalturaVirusScanProfileFilter = KalturaVirusScanProfileFilter;

util.inherits(KalturaVirusScanProfileFilter, KalturaVirusScanProfileBaseFilter);


/**
 */
function KalturaWidgetFilter(){
  KalturaWidgetFilter.super_.call(this);
};
module.exports.KalturaWidgetFilter = KalturaWidgetFilter;

util.inherits(KalturaWidgetFilter, KalturaWidgetBaseFilter);


/**
 * @param  protocolTypeEqual  string    .
 * @param  protocolTypeIn  string    .
 * @param  titleLike  string    .
 * @param  titleMultiLikeOr  string    .
 * @param  titleMultiLikeAnd  string    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationLessThanOrEqual  int    .
 */
function KalturaAdCuePointBaseFilter(){
  KalturaAdCuePointBaseFilter.super_.call(this);
  this.protocolTypeEqual = null;
  this.protocolTypeIn = null;
  this.titleLike = null;
  this.titleMultiLikeOr = null;
  this.titleMultiLikeAnd = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationLessThanOrEqual = null;
};
module.exports.KalturaAdCuePointBaseFilter = KalturaAdCuePointBaseFilter;

util.inherits(KalturaAdCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaAdminUserBaseFilter(){
  KalturaAdminUserBaseFilter.super_.call(this);
};
module.exports.KalturaAdminUserBaseFilter = KalturaAdminUserBaseFilter;

util.inherits(KalturaAdminUserBaseFilter, KalturaUserFilter);


/**
 */
function KalturaAmazonS3StorageProfileBaseFilter(){
  KalturaAmazonS3StorageProfileBaseFilter.super_.call(this);
};
module.exports.KalturaAmazonS3StorageProfileBaseFilter = KalturaAmazonS3StorageProfileBaseFilter;

util.inherits(KalturaAmazonS3StorageProfileBaseFilter, KalturaStorageProfileFilter);


/**
 * @param  parentIdEqual  string    .
 * @param  parentIdIn  string    .
 * @param  textLike  string    .
 * @param  textMultiLikeOr  string    .
 * @param  textMultiLikeAnd  string    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationLessThanOrEqual  int    .
 */
function KalturaAnnotationBaseFilter(){
  KalturaAnnotationBaseFilter.super_.call(this);
  this.parentIdEqual = null;
  this.parentIdIn = null;
  this.textLike = null;
  this.textMultiLikeOr = null;
  this.textMultiLikeAnd = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationLessThanOrEqual = null;
};
module.exports.KalturaAnnotationBaseFilter = KalturaAnnotationBaseFilter;

util.inherits(KalturaAnnotationBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaApiActionPermissionItemBaseFilter(){
  KalturaApiActionPermissionItemBaseFilter.super_.call(this);
};
module.exports.KalturaApiActionPermissionItemBaseFilter = KalturaApiActionPermissionItemBaseFilter;

util.inherits(KalturaApiActionPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
function KalturaApiParameterPermissionItemBaseFilter(){
  KalturaApiParameterPermissionItemBaseFilter.super_.call(this);
};
module.exports.KalturaApiParameterPermissionItemBaseFilter = KalturaApiParameterPermissionItemBaseFilter;

util.inherits(KalturaApiParameterPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaAttachmentAssetBaseFilter(){
  KalturaAttachmentAssetBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaAttachmentAssetBaseFilter = KalturaAttachmentAssetBaseFilter;

util.inherits(KalturaAttachmentAssetBaseFilter, KalturaAssetFilter);


/**
 * @param  jobTypeAndSubTypeIn  string    .
 */
function KalturaBatchJobFilterExt(){
  KalturaBatchJobFilterExt.super_.call(this);
  this.jobTypeAndSubTypeIn = null;
};
module.exports.KalturaBatchJobFilterExt = KalturaBatchJobFilterExt;

util.inherits(KalturaBatchJobFilterExt, KalturaBatchJobFilter);


/**
 * @param  captionParamsIdEqual  int    .
 * @param  captionParamsIdIn  string    .
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaCaptionAssetBaseFilter(){
  KalturaCaptionAssetBaseFilter.super_.call(this);
  this.captionParamsIdEqual = null;
  this.captionParamsIdIn = null;
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaCaptionAssetBaseFilter = KalturaCaptionAssetBaseFilter;

util.inherits(KalturaCaptionAssetBaseFilter, KalturaAssetFilter);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 */
function KalturaCaptionParamsBaseFilter(){
  KalturaCaptionParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
};
module.exports.KalturaCaptionParamsBaseFilter = KalturaCaptionParamsBaseFilter;

util.inherits(KalturaCaptionParamsBaseFilter, KalturaAssetParamsFilter);


/**
 * @param  codeLike  string    .
 * @param  codeMultiLikeOr  string    .
 * @param  codeMultiLikeAnd  string    .
 * @param  codeEqual  string    .
 * @param  codeIn  string    .
 * @param  descriptionLike  string    .
 * @param  descriptionMultiLikeOr  string    .
 * @param  descriptionMultiLikeAnd  string    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationLessThanOrEqual  int    .
 */
function KalturaCodeCuePointBaseFilter(){
  KalturaCodeCuePointBaseFilter.super_.call(this);
  this.codeLike = null;
  this.codeMultiLikeOr = null;
  this.codeMultiLikeAnd = null;
  this.codeEqual = null;
  this.codeIn = null;
  this.descriptionLike = null;
  this.descriptionMultiLikeOr = null;
  this.descriptionMultiLikeAnd = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationLessThanOrEqual = null;
};
module.exports.KalturaCodeCuePointBaseFilter = KalturaCodeCuePointBaseFilter;

util.inherits(KalturaCodeCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaConfigurableDistributionProfileBaseFilter(){
  KalturaConfigurableDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaConfigurableDistributionProfileBaseFilter = KalturaConfigurableDistributionProfileBaseFilter;

util.inherits(KalturaConfigurableDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaDataEntryBaseFilter(){
  KalturaDataEntryBaseFilter.super_.call(this);
};
module.exports.KalturaDataEntryBaseFilter = KalturaDataEntryBaseFilter;

util.inherits(KalturaDataEntryBaseFilter, KalturaBaseEntryFilter);


/**
 * @param  documentTypeEqual  int    .
 * @param  documentTypeIn  string    .
 * @param  assetParamsIdsMatchOr  string    .
 * @param  assetParamsIdsMatchAnd  string    .
 */
function KalturaDocumentEntryBaseFilter(){
  KalturaDocumentEntryBaseFilter.super_.call(this);
  this.documentTypeEqual = null;
  this.documentTypeIn = null;
  this.assetParamsIdsMatchOr = null;
  this.assetParamsIdsMatchAnd = null;
};
module.exports.KalturaDocumentEntryBaseFilter = KalturaDocumentEntryBaseFilter;

util.inherits(KalturaDocumentEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaEmailNotificationTemplateBaseFilter(){
  KalturaEmailNotificationTemplateBaseFilter.super_.call(this);
};
module.exports.KalturaEmailNotificationTemplateBaseFilter = KalturaEmailNotificationTemplateBaseFilter;

util.inherits(KalturaEmailNotificationTemplateBaseFilter, KalturaEventNotificationTemplateFilter);


/**
 * @param  flavorParamsIdEqual  int    .
 * @param  flavorParamsIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaFlavorAssetBaseFilter(){
  KalturaFlavorAssetBaseFilter.super_.call(this);
  this.flavorParamsIdEqual = null;
  this.flavorParamsIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaFlavorAssetBaseFilter = KalturaFlavorAssetBaseFilter;

util.inherits(KalturaFlavorAssetBaseFilter, KalturaAssetFilter);


/**
 * @param  formatEqual  string    .
 */
function KalturaFlavorParamsBaseFilter(){
  KalturaFlavorParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
module.exports.KalturaFlavorParamsBaseFilter = KalturaFlavorParamsBaseFilter;

util.inherits(KalturaFlavorParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
function KalturaGenericDistributionProfileBaseFilter(){
  KalturaGenericDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProfileBaseFilter = KalturaGenericDistributionProfileBaseFilter;

util.inherits(KalturaGenericDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  isDefaultEqual  int    .
 * @param  isDefaultIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaGenericDistributionProviderBaseFilter(){
  KalturaGenericDistributionProviderBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.isDefaultEqual = null;
  this.isDefaultIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaGenericDistributionProviderBaseFilter = KalturaGenericDistributionProviderBaseFilter;

util.inherits(KalturaGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericSyndicationFeedBaseFilter(){
  KalturaGenericSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGenericSyndicationFeedBaseFilter = KalturaGenericSyndicationFeedBaseFilter;

util.inherits(KalturaGenericSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedBaseFilter(){
  KalturaGoogleVideoSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGoogleVideoSyndicationFeedBaseFilter = KalturaGoogleVideoSyndicationFeedBaseFilter;

util.inherits(KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaHttpNotificationTemplateBaseFilter(){
  KalturaHttpNotificationTemplateBaseFilter.super_.call(this);
};
module.exports.KalturaHttpNotificationTemplateBaseFilter = KalturaHttpNotificationTemplateBaseFilter;

util.inherits(KalturaHttpNotificationTemplateBaseFilter, KalturaEventNotificationTemplateFilter);


/**
 */
function KalturaITunesSyndicationFeedBaseFilter(){
  KalturaITunesSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaITunesSyndicationFeedBaseFilter = KalturaITunesSyndicationFeedBaseFilter;

util.inherits(KalturaITunesSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaKontikiStorageProfileBaseFilter(){
  KalturaKontikiStorageProfileBaseFilter.super_.call(this);
};
module.exports.KalturaKontikiStorageProfileBaseFilter = KalturaKontikiStorageProfileBaseFilter;

util.inherits(KalturaKontikiStorageProfileBaseFilter, KalturaStorageProfileFilter);


/**
 * @param  lastPlayedAtGreaterThanOrEqual  int    .
 * @param  lastPlayedAtLessThanOrEqual  int    .
 * @param  durationLessThan  int    .
 * @param  durationGreaterThan  int    .
 * @param  durationLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationTypeMatchOr  string    .
 */
function KalturaPlayableEntryBaseFilter(){
  KalturaPlayableEntryBaseFilter.super_.call(this);
  this.lastPlayedAtGreaterThanOrEqual = null;
  this.lastPlayedAtLessThanOrEqual = null;
  this.durationLessThan = null;
  this.durationGreaterThan = null;
  this.durationLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationTypeMatchOr = null;
};
module.exports.KalturaPlayableEntryBaseFilter = KalturaPlayableEntryBaseFilter;

util.inherits(KalturaPlayableEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaPlaylistBaseFilter(){
  KalturaPlaylistBaseFilter.super_.call(this);
};
module.exports.KalturaPlaylistBaseFilter = KalturaPlaylistBaseFilter;

util.inherits(KalturaPlaylistBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaRemoteDropFolderBaseFilter(){
  KalturaRemoteDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaRemoteDropFolderBaseFilter = KalturaRemoteDropFolderBaseFilter;

util.inherits(KalturaRemoteDropFolderBaseFilter, KalturaDropFolderFilter);


/**
 */
function KalturaSyndicationDistributionProfileBaseFilter(){
  KalturaSyndicationDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProfileBaseFilter = KalturaSyndicationDistributionProfileBaseFilter;

util.inherits(KalturaSyndicationDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProviderBaseFilter(){
  KalturaSyndicationDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProviderBaseFilter = KalturaSyndicationDistributionProviderBaseFilter;

util.inherits(KalturaSyndicationDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 * @param  partnerParentIdEqual  int    .
 * @param  partnerParentIdIn  string    .
 */
function KalturaSystemPartnerFilter(){
  KalturaSystemPartnerFilter.super_.call(this);
  this.partnerParentIdEqual = null;
  this.partnerParentIdIn = null;
};
module.exports.KalturaSystemPartnerFilter = KalturaSystemPartnerFilter;

util.inherits(KalturaSystemPartnerFilter, KalturaPartnerFilter);


/**
 * @param  thumbParamsIdEqual  int    .
 * @param  thumbParamsIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaThumbAssetBaseFilter(){
  KalturaThumbAssetBaseFilter.super_.call(this);
  this.thumbParamsIdEqual = null;
  this.thumbParamsIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaThumbAssetBaseFilter = KalturaThumbAssetBaseFilter;

util.inherits(KalturaThumbAssetBaseFilter, KalturaAssetFilter);


/**
 * @param  formatEqual  string    .
 */
function KalturaThumbParamsBaseFilter(){
  KalturaThumbParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
module.exports.KalturaThumbParamsBaseFilter = KalturaThumbParamsBaseFilter;

util.inherits(KalturaThumbParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedBaseFilter(){
  KalturaTubeMogulSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaTubeMogulSyndicationFeedBaseFilter = KalturaTubeMogulSyndicationFeedBaseFilter;

util.inherits(KalturaTubeMogulSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaUiConfAdminBaseFilter(){
  KalturaUiConfAdminBaseFilter.super_.call(this);
};
module.exports.KalturaUiConfAdminBaseFilter = KalturaUiConfAdminBaseFilter;

util.inherits(KalturaUiConfAdminBaseFilter, KalturaUiConfFilter);


/**
 * @param  groupTypeEq  int    Eq filter for the partner's group type
 *       .
 * @param  groupTypeIn  string    In filter for the partner's group type
 *       .
 * @param  partnerPermissionsExist  string    Filter for partner permissions- filter contains comma-separated string of permission names which the returned partners should have.
 *       .
 */
function KalturaVarConsolePartnerFilter(){
  KalturaVarConsolePartnerFilter.super_.call(this);
  this.groupTypeEq = null;
  this.groupTypeIn = null;
  this.partnerPermissionsExist = null;
};
module.exports.KalturaVarConsolePartnerFilter = KalturaVarConsolePartnerFilter;

util.inherits(KalturaVarConsolePartnerFilter, KalturaPartnerFilter);


/**
 */
function KalturaWebexDropFolderBaseFilter(){
  KalturaWebexDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaWebexDropFolderBaseFilter = KalturaWebexDropFolderBaseFilter;

util.inherits(KalturaWebexDropFolderBaseFilter, KalturaDropFolderFilter);


/**
 */
function KalturaWebexDropFolderFileBaseFilter(){
  KalturaWebexDropFolderFileBaseFilter.super_.call(this);
};
module.exports.KalturaWebexDropFolderFileBaseFilter = KalturaWebexDropFolderFileBaseFilter;

util.inherits(KalturaWebexDropFolderFileBaseFilter, KalturaDropFolderFileFilter);


/**
 */
function KalturaWidevineProfileBaseFilter(){
  KalturaWidevineProfileBaseFilter.super_.call(this);
};
module.exports.KalturaWidevineProfileBaseFilter = KalturaWidevineProfileBaseFilter;

util.inherits(KalturaWidevineProfileBaseFilter, KalturaDrmProfileFilter);


/**
 */
function KalturaYahooSyndicationFeedBaseFilter(){
  KalturaYahooSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaYahooSyndicationFeedBaseFilter = KalturaYahooSyndicationFeedBaseFilter;

util.inherits(KalturaYahooSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaAdCuePointFilter(){
  KalturaAdCuePointFilter.super_.call(this);
};
module.exports.KalturaAdCuePointFilter = KalturaAdCuePointFilter;

util.inherits(KalturaAdCuePointFilter, KalturaAdCuePointBaseFilter);


/**
 */
function KalturaAdminUserFilter(){
  KalturaAdminUserFilter.super_.call(this);
};
module.exports.KalturaAdminUserFilter = KalturaAdminUserFilter;

util.inherits(KalturaAdminUserFilter, KalturaAdminUserBaseFilter);


/**
 */
function KalturaAmazonS3StorageProfileFilter(){
  KalturaAmazonS3StorageProfileFilter.super_.call(this);
};
module.exports.KalturaAmazonS3StorageProfileFilter = KalturaAmazonS3StorageProfileFilter;

util.inherits(KalturaAmazonS3StorageProfileFilter, KalturaAmazonS3StorageProfileBaseFilter);


/**
 */
function KalturaAnnotationFilter(){
  KalturaAnnotationFilter.super_.call(this);
};
module.exports.KalturaAnnotationFilter = KalturaAnnotationFilter;

util.inherits(KalturaAnnotationFilter, KalturaAnnotationBaseFilter);


/**
 */
function KalturaApiActionPermissionItemFilter(){
  KalturaApiActionPermissionItemFilter.super_.call(this);
};
module.exports.KalturaApiActionPermissionItemFilter = KalturaApiActionPermissionItemFilter;

util.inherits(KalturaApiActionPermissionItemFilter, KalturaApiActionPermissionItemBaseFilter);


/**
 */
function KalturaApiParameterPermissionItemFilter(){
  KalturaApiParameterPermissionItemFilter.super_.call(this);
};
module.exports.KalturaApiParameterPermissionItemFilter = KalturaApiParameterPermissionItemFilter;

util.inherits(KalturaApiParameterPermissionItemFilter, KalturaApiParameterPermissionItemBaseFilter);


/**
 */
function KalturaAttachmentAssetFilter(){
  KalturaAttachmentAssetFilter.super_.call(this);
};
module.exports.KalturaAttachmentAssetFilter = KalturaAttachmentAssetFilter;

util.inherits(KalturaAttachmentAssetFilter, KalturaAttachmentAssetBaseFilter);


/**
 */
function KalturaCaptionAssetFilter(){
  KalturaCaptionAssetFilter.super_.call(this);
};
module.exports.KalturaCaptionAssetFilter = KalturaCaptionAssetFilter;

util.inherits(KalturaCaptionAssetFilter, KalturaCaptionAssetBaseFilter);


/**
 */
function KalturaCaptionParamsFilter(){
  KalturaCaptionParamsFilter.super_.call(this);
};
module.exports.KalturaCaptionParamsFilter = KalturaCaptionParamsFilter;

util.inherits(KalturaCaptionParamsFilter, KalturaCaptionParamsBaseFilter);


/**
 */
function KalturaCodeCuePointFilter(){
  KalturaCodeCuePointFilter.super_.call(this);
};
module.exports.KalturaCodeCuePointFilter = KalturaCodeCuePointFilter;

util.inherits(KalturaCodeCuePointFilter, KalturaCodeCuePointBaseFilter);


/**
 */
function KalturaConfigurableDistributionProfileFilter(){
  KalturaConfigurableDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaConfigurableDistributionProfileFilter = KalturaConfigurableDistributionProfileFilter;

util.inherits(KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
function KalturaDataEntryFilter(){
  KalturaDataEntryFilter.super_.call(this);
};
module.exports.KalturaDataEntryFilter = KalturaDataEntryFilter;

util.inherits(KalturaDataEntryFilter, KalturaDataEntryBaseFilter);


/**
 */
function KalturaDocumentEntryFilter(){
  KalturaDocumentEntryFilter.super_.call(this);
};
module.exports.KalturaDocumentEntryFilter = KalturaDocumentEntryFilter;

util.inherits(KalturaDocumentEntryFilter, KalturaDocumentEntryBaseFilter);


/**
 */
function KalturaEmailNotificationTemplateFilter(){
  KalturaEmailNotificationTemplateFilter.super_.call(this);
};
module.exports.KalturaEmailNotificationTemplateFilter = KalturaEmailNotificationTemplateFilter;

util.inherits(KalturaEmailNotificationTemplateFilter, KalturaEmailNotificationTemplateBaseFilter);


/**
 */
function KalturaFlavorAssetFilter(){
  KalturaFlavorAssetFilter.super_.call(this);
};
module.exports.KalturaFlavorAssetFilter = KalturaFlavorAssetFilter;

util.inherits(KalturaFlavorAssetFilter, KalturaFlavorAssetBaseFilter);


/**
 */
function KalturaFlavorParamsFilter(){
  KalturaFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaFlavorParamsFilter = KalturaFlavorParamsFilter;

util.inherits(KalturaFlavorParamsFilter, KalturaFlavorParamsBaseFilter);


/**
 */
function KalturaGenericDistributionProfileFilter(){
  KalturaGenericDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProfileFilter = KalturaGenericDistributionProfileFilter;

util.inherits(KalturaGenericDistributionProfileFilter, KalturaGenericDistributionProfileBaseFilter);


/**
 */
function KalturaGenericDistributionProviderFilter(){
  KalturaGenericDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProviderFilter = KalturaGenericDistributionProviderFilter;

util.inherits(KalturaGenericDistributionProviderFilter, KalturaGenericDistributionProviderBaseFilter);


/**
 */
function KalturaGenericSyndicationFeedFilter(){
  KalturaGenericSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGenericSyndicationFeedFilter = KalturaGenericSyndicationFeedFilter;

util.inherits(KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedBaseFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedFilter(){
  KalturaGoogleVideoSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGoogleVideoSyndicationFeedFilter = KalturaGoogleVideoSyndicationFeedFilter;

util.inherits(KalturaGoogleVideoSyndicationFeedFilter, KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function KalturaHttpNotificationTemplateFilter(){
  KalturaHttpNotificationTemplateFilter.super_.call(this);
};
module.exports.KalturaHttpNotificationTemplateFilter = KalturaHttpNotificationTemplateFilter;

util.inherits(KalturaHttpNotificationTemplateFilter, KalturaHttpNotificationTemplateBaseFilter);


/**
 */
function KalturaITunesSyndicationFeedFilter(){
  KalturaITunesSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaITunesSyndicationFeedFilter = KalturaITunesSyndicationFeedFilter;

util.inherits(KalturaITunesSyndicationFeedFilter, KalturaITunesSyndicationFeedBaseFilter);


/**
 */
function KalturaKontikiStorageProfileFilter(){
  KalturaKontikiStorageProfileFilter.super_.call(this);
};
module.exports.KalturaKontikiStorageProfileFilter = KalturaKontikiStorageProfileFilter;

util.inherits(KalturaKontikiStorageProfileFilter, KalturaKontikiStorageProfileBaseFilter);


/**
 */
function KalturaPlayableEntryFilter(){
  KalturaPlayableEntryFilter.super_.call(this);
};
module.exports.KalturaPlayableEntryFilter = KalturaPlayableEntryFilter;

util.inherits(KalturaPlayableEntryFilter, KalturaPlayableEntryBaseFilter);


/**
 */
function KalturaPlaylistFilter(){
  KalturaPlaylistFilter.super_.call(this);
};
module.exports.KalturaPlaylistFilter = KalturaPlaylistFilter;

util.inherits(KalturaPlaylistFilter, KalturaPlaylistBaseFilter);


/**
 */
function KalturaRemoteDropFolderFilter(){
  KalturaRemoteDropFolderFilter.super_.call(this);
};
module.exports.KalturaRemoteDropFolderFilter = KalturaRemoteDropFolderFilter;

util.inherits(KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderBaseFilter);


/**
 */
function KalturaSyndicationDistributionProfileFilter(){
  KalturaSyndicationDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProfileFilter = KalturaSyndicationDistributionProfileFilter;

util.inherits(KalturaSyndicationDistributionProfileFilter, KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
function KalturaSyndicationDistributionProviderFilter(){
  KalturaSyndicationDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProviderFilter = KalturaSyndicationDistributionProviderFilter;

util.inherits(KalturaSyndicationDistributionProviderFilter, KalturaSyndicationDistributionProviderBaseFilter);


/**
 */
function KalturaThumbAssetFilter(){
  KalturaThumbAssetFilter.super_.call(this);
};
module.exports.KalturaThumbAssetFilter = KalturaThumbAssetFilter;

util.inherits(KalturaThumbAssetFilter, KalturaThumbAssetBaseFilter);


/**
 */
function KalturaThumbParamsFilter(){
  KalturaThumbParamsFilter.super_.call(this);
};
module.exports.KalturaThumbParamsFilter = KalturaThumbParamsFilter;

util.inherits(KalturaThumbParamsFilter, KalturaThumbParamsBaseFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedFilter(){
  KalturaTubeMogulSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaTubeMogulSyndicationFeedFilter = KalturaTubeMogulSyndicationFeedFilter;

util.inherits(KalturaTubeMogulSyndicationFeedFilter, KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
function KalturaUiConfAdminFilter(){
  KalturaUiConfAdminFilter.super_.call(this);
};
module.exports.KalturaUiConfAdminFilter = KalturaUiConfAdminFilter;

util.inherits(KalturaUiConfAdminFilter, KalturaUiConfAdminBaseFilter);


/**
 */
function KalturaWebexDropFolderFileFilter(){
  KalturaWebexDropFolderFileFilter.super_.call(this);
};
module.exports.KalturaWebexDropFolderFileFilter = KalturaWebexDropFolderFileFilter;

util.inherits(KalturaWebexDropFolderFileFilter, KalturaWebexDropFolderFileBaseFilter);


/**
 */
function KalturaWebexDropFolderFilter(){
  KalturaWebexDropFolderFilter.super_.call(this);
};
module.exports.KalturaWebexDropFolderFilter = KalturaWebexDropFolderFilter;

util.inherits(KalturaWebexDropFolderFilter, KalturaWebexDropFolderBaseFilter);


/**
 */
function KalturaWidevineProfileFilter(){
  KalturaWidevineProfileFilter.super_.call(this);
};
module.exports.KalturaWidevineProfileFilter = KalturaWidevineProfileFilter;

util.inherits(KalturaWidevineProfileFilter, KalturaWidevineProfileBaseFilter);


/**
 */
function KalturaYahooSyndicationFeedFilter(){
  KalturaYahooSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaYahooSyndicationFeedFilter = KalturaYahooSyndicationFeedFilter;

util.inherits(KalturaYahooSyndicationFeedFilter, KalturaYahooSyndicationFeedBaseFilter);


/**
 * @param  contentLike  string    .
 * @param  contentMultiLikeOr  string    .
 * @param  contentMultiLikeAnd  string    .
 * @param  partnerDescriptionLike  string    .
 * @param  partnerDescriptionMultiLikeOr  string    .
 * @param  partnerDescriptionMultiLikeAnd  string    .
 * @param  languageEqual  string    .
 * @param  languageIn  string    .
 * @param  labelEqual  string    .
 * @param  labelIn  string    .
 * @param  startTimeGreaterThanOrEqual  int    .
 * @param  startTimeLessThanOrEqual  int    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 */
function KalturaCaptionAssetItemFilter(){
  KalturaCaptionAssetItemFilter.super_.call(this);
  this.contentLike = null;
  this.contentMultiLikeOr = null;
  this.contentMultiLikeAnd = null;
  this.partnerDescriptionLike = null;
  this.partnerDescriptionMultiLikeOr = null;
  this.partnerDescriptionMultiLikeAnd = null;
  this.languageEqual = null;
  this.languageIn = null;
  this.labelEqual = null;
  this.labelIn = null;
  this.startTimeGreaterThanOrEqual = null;
  this.startTimeLessThanOrEqual = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
};
module.exports.KalturaCaptionAssetItemFilter = KalturaCaptionAssetItemFilter;

util.inherits(KalturaCaptionAssetItemFilter, KalturaCaptionAssetFilter);


/**
 */
function KalturaDocumentFlavorParamsBaseFilter(){
  KalturaDocumentFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsBaseFilter = KalturaDocumentFlavorParamsBaseFilter;

util.inherits(KalturaDocumentFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 * @param  flavorParamsIdEqual  int    .
 * @param  flavorParamsVersionEqual  string    .
 * @param  flavorAssetIdEqual  string    .
 * @param  flavorAssetVersionEqual  string    .
 */
function KalturaFlavorParamsOutputBaseFilter(){
  KalturaFlavorParamsOutputBaseFilter.super_.call(this);
  this.flavorParamsIdEqual = null;
  this.flavorParamsVersionEqual = null;
  this.flavorAssetIdEqual = null;
  this.flavorAssetVersionEqual = null;
};
module.exports.KalturaFlavorParamsOutputBaseFilter = KalturaFlavorParamsOutputBaseFilter;

util.inherits(KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaFtpDropFolderBaseFilter(){
  KalturaFtpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaFtpDropFolderBaseFilter = KalturaFtpDropFolderBaseFilter;

util.inherits(KalturaFtpDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedBaseFilter(){
  KalturaGenericXsltSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGenericXsltSyndicationFeedBaseFilter = KalturaGenericXsltSyndicationFeedBaseFilter;

util.inherits(KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedFilter);


/**
 */
function KalturaImageFlavorParamsBaseFilter(){
  KalturaImageFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaImageFlavorParamsBaseFilter = KalturaImageFlavorParamsBaseFilter;

util.inherits(KalturaImageFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaLiveAssetBaseFilter(){
  KalturaLiveAssetBaseFilter.super_.call(this);
};
module.exports.KalturaLiveAssetBaseFilter = KalturaLiveAssetBaseFilter;

util.inherits(KalturaLiveAssetBaseFilter, KalturaFlavorAssetFilter);


/**
 */
function KalturaLiveParamsBaseFilter(){
  KalturaLiveParamsBaseFilter.super_.call(this);
};
module.exports.KalturaLiveParamsBaseFilter = KalturaLiveParamsBaseFilter;

util.inherits(KalturaLiveParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 * @param  mediaTypeEqual  int    .
 * @param  mediaTypeIn  string    .
 * @param  mediaDateGreaterThanOrEqual  int    .
 * @param  mediaDateLessThanOrEqual  int    .
 * @param  flavorParamsIdsMatchOr  string    .
 * @param  flavorParamsIdsMatchAnd  string    .
 */
function KalturaMediaEntryBaseFilter(){
  KalturaMediaEntryBaseFilter.super_.call(this);
  this.mediaTypeEqual = null;
  this.mediaTypeIn = null;
  this.mediaDateGreaterThanOrEqual = null;
  this.mediaDateLessThanOrEqual = null;
  this.flavorParamsIdsMatchOr = null;
  this.flavorParamsIdsMatchAnd = null;
};
module.exports.KalturaMediaEntryBaseFilter = KalturaMediaEntryBaseFilter;

util.inherits(KalturaMediaEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
function KalturaMediaFlavorParamsBaseFilter(){
  KalturaMediaFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsBaseFilter = KalturaMediaFlavorParamsBaseFilter;

util.inherits(KalturaMediaFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaMixEntryBaseFilter(){
  KalturaMixEntryBaseFilter.super_.call(this);
};
module.exports.KalturaMixEntryBaseFilter = KalturaMixEntryBaseFilter;

util.inherits(KalturaMixEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
function KalturaPdfFlavorParamsBaseFilter(){
  KalturaPdfFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsBaseFilter = KalturaPdfFlavorParamsBaseFilter;

util.inherits(KalturaPdfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaSshDropFolderBaseFilter(){
  KalturaSshDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaSshDropFolderBaseFilter = KalturaSshDropFolderBaseFilter;

util.inherits(KalturaSshDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
function KalturaSwfFlavorParamsBaseFilter(){
  KalturaSwfFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsBaseFilter = KalturaSwfFlavorParamsBaseFilter;

util.inherits(KalturaSwfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 * @param  thumbParamsIdEqual  int    .
 * @param  thumbParamsVersionEqual  string    .
 * @param  thumbAssetIdEqual  string    .
 * @param  thumbAssetVersionEqual  string    .
 */
function KalturaThumbParamsOutputBaseFilter(){
  KalturaThumbParamsOutputBaseFilter.super_.call(this);
  this.thumbParamsIdEqual = null;
  this.thumbParamsVersionEqual = null;
  this.thumbAssetIdEqual = null;
  this.thumbAssetVersionEqual = null;
};
module.exports.KalturaThumbParamsOutputBaseFilter = KalturaThumbParamsOutputBaseFilter;

util.inherits(KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsFilter);


/**
 */
function KalturaWidevineFlavorAssetBaseFilter(){
  KalturaWidevineFlavorAssetBaseFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorAssetBaseFilter = KalturaWidevineFlavorAssetBaseFilter;

util.inherits(KalturaWidevineFlavorAssetBaseFilter, KalturaFlavorAssetFilter);


/**
 */
function KalturaWidevineFlavorParamsBaseFilter(){
  KalturaWidevineFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorParamsBaseFilter = KalturaWidevineFlavorParamsBaseFilter;

util.inherits(KalturaWidevineFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaDocumentFlavorParamsFilter(){
  KalturaDocumentFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsFilter = KalturaDocumentFlavorParamsFilter;

util.inherits(KalturaDocumentFlavorParamsFilter, KalturaDocumentFlavorParamsBaseFilter);


/**
 */
function KalturaFlavorParamsOutputFilter(){
  KalturaFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaFlavorParamsOutputFilter = KalturaFlavorParamsOutputFilter;

util.inherits(KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaFtpDropFolderFilter(){
  KalturaFtpDropFolderFilter.super_.call(this);
};
module.exports.KalturaFtpDropFolderFilter = KalturaFtpDropFolderFilter;

util.inherits(KalturaFtpDropFolderFilter, KalturaFtpDropFolderBaseFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedFilter(){
  KalturaGenericXsltSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGenericXsltSyndicationFeedFilter = KalturaGenericXsltSyndicationFeedFilter;

util.inherits(KalturaGenericXsltSyndicationFeedFilter, KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 */
function KalturaImageFlavorParamsFilter(){
  KalturaImageFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaImageFlavorParamsFilter = KalturaImageFlavorParamsFilter;

util.inherits(KalturaImageFlavorParamsFilter, KalturaImageFlavorParamsBaseFilter);


/**
 */
function KalturaLiveAssetFilter(){
  KalturaLiveAssetFilter.super_.call(this);
};
module.exports.KalturaLiveAssetFilter = KalturaLiveAssetFilter;

util.inherits(KalturaLiveAssetFilter, KalturaLiveAssetBaseFilter);


/**
 */
function KalturaLiveParamsFilter(){
  KalturaLiveParamsFilter.super_.call(this);
};
module.exports.KalturaLiveParamsFilter = KalturaLiveParamsFilter;

util.inherits(KalturaLiveParamsFilter, KalturaLiveParamsBaseFilter);


/**
 */
function KalturaMediaEntryFilter(){
  KalturaMediaEntryFilter.super_.call(this);
};
module.exports.KalturaMediaEntryFilter = KalturaMediaEntryFilter;

util.inherits(KalturaMediaEntryFilter, KalturaMediaEntryBaseFilter);


/**
 */
function KalturaMediaFlavorParamsFilter(){
  KalturaMediaFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsFilter = KalturaMediaFlavorParamsFilter;

util.inherits(KalturaMediaFlavorParamsFilter, KalturaMediaFlavorParamsBaseFilter);


/**
 */
function KalturaMixEntryFilter(){
  KalturaMixEntryFilter.super_.call(this);
};
module.exports.KalturaMixEntryFilter = KalturaMixEntryFilter;

util.inherits(KalturaMixEntryFilter, KalturaMixEntryBaseFilter);


/**
 */
function KalturaPdfFlavorParamsFilter(){
  KalturaPdfFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsFilter = KalturaPdfFlavorParamsFilter;

util.inherits(KalturaPdfFlavorParamsFilter, KalturaPdfFlavorParamsBaseFilter);


/**
 */
function KalturaSshDropFolderFilter(){
  KalturaSshDropFolderFilter.super_.call(this);
};
module.exports.KalturaSshDropFolderFilter = KalturaSshDropFolderFilter;

util.inherits(KalturaSshDropFolderFilter, KalturaSshDropFolderBaseFilter);


/**
 */
function KalturaSwfFlavorParamsFilter(){
  KalturaSwfFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsFilter = KalturaSwfFlavorParamsFilter;

util.inherits(KalturaSwfFlavorParamsFilter, KalturaSwfFlavorParamsBaseFilter);


/**
 */
function KalturaThumbParamsOutputFilter(){
  KalturaThumbParamsOutputFilter.super_.call(this);
};
module.exports.KalturaThumbParamsOutputFilter = KalturaThumbParamsOutputFilter;

util.inherits(KalturaThumbParamsOutputFilter, KalturaThumbParamsOutputBaseFilter);


/**
 */
function KalturaWidevineFlavorAssetFilter(){
  KalturaWidevineFlavorAssetFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorAssetFilter = KalturaWidevineFlavorAssetFilter;

util.inherits(KalturaWidevineFlavorAssetFilter, KalturaWidevineFlavorAssetBaseFilter);


/**
 */
function KalturaWidevineFlavorParamsFilter(){
  KalturaWidevineFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorParamsFilter = KalturaWidevineFlavorParamsFilter;

util.inherits(KalturaWidevineFlavorParamsFilter, KalturaWidevineFlavorParamsBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputBaseFilter(){
  KalturaDocumentFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsOutputBaseFilter = KalturaDocumentFlavorParamsOutputBaseFilter;

util.inherits(KalturaDocumentFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 * @param  externalSourceTypeEqual  string    .
 * @param  externalSourceTypeIn  string    .
 * @param  assetParamsIdsMatchOr  string    .
 * @param  assetParamsIdsMatchAnd  string    .
 */
function KalturaExternalMediaEntryBaseFilter(){
  KalturaExternalMediaEntryBaseFilter.super_.call(this);
  this.externalSourceTypeEqual = null;
  this.externalSourceTypeIn = null;
  this.assetParamsIdsMatchOr = null;
  this.assetParamsIdsMatchAnd = null;
};
module.exports.KalturaExternalMediaEntryBaseFilter = KalturaExternalMediaEntryBaseFilter;

util.inherits(KalturaExternalMediaEntryBaseFilter, KalturaMediaEntryFilter);


/**
 */
function KalturaImageFlavorParamsOutputBaseFilter(){
  KalturaImageFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaImageFlavorParamsOutputBaseFilter = KalturaImageFlavorParamsOutputBaseFilter;

util.inherits(KalturaImageFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaLiveEntryBaseFilter(){
  KalturaLiveEntryBaseFilter.super_.call(this);
};
module.exports.KalturaLiveEntryBaseFilter = KalturaLiveEntryBaseFilter;

util.inherits(KalturaLiveEntryBaseFilter, KalturaMediaEntryFilter);


/**
 * @param  limit  int    .
 */
function KalturaMediaEntryFilterForPlaylist(){
  KalturaMediaEntryFilterForPlaylist.super_.call(this);
  this.limit = null;
};
module.exports.KalturaMediaEntryFilterForPlaylist = KalturaMediaEntryFilterForPlaylist;

util.inherits(KalturaMediaEntryFilterForPlaylist, KalturaMediaEntryFilter);


/**
 */
function KalturaMediaFlavorParamsOutputBaseFilter(){
  KalturaMediaFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsOutputBaseFilter = KalturaMediaFlavorParamsOutputBaseFilter;

util.inherits(KalturaMediaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaPdfFlavorParamsOutputBaseFilter(){
  KalturaPdfFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsOutputBaseFilter = KalturaPdfFlavorParamsOutputBaseFilter;

util.inherits(KalturaPdfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaScpDropFolderBaseFilter(){
  KalturaScpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaScpDropFolderBaseFilter = KalturaScpDropFolderBaseFilter;

util.inherits(KalturaScpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
function KalturaSftpDropFolderBaseFilter(){
  KalturaSftpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaSftpDropFolderBaseFilter = KalturaSftpDropFolderBaseFilter;

util.inherits(KalturaSftpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
function KalturaSwfFlavorParamsOutputBaseFilter(){
  KalturaSwfFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsOutputBaseFilter = KalturaSwfFlavorParamsOutputBaseFilter;

util.inherits(KalturaSwfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaWidevineFlavorParamsOutputBaseFilter(){
  KalturaWidevineFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorParamsOutputBaseFilter = KalturaWidevineFlavorParamsOutputBaseFilter;

util.inherits(KalturaWidevineFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputFilter(){
  KalturaDocumentFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsOutputFilter = KalturaDocumentFlavorParamsOutputFilter;

util.inherits(KalturaDocumentFlavorParamsOutputFilter, KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
function KalturaExternalMediaEntryFilter(){
  KalturaExternalMediaEntryFilter.super_.call(this);
};
module.exports.KalturaExternalMediaEntryFilter = KalturaExternalMediaEntryFilter;

util.inherits(KalturaExternalMediaEntryFilter, KalturaExternalMediaEntryBaseFilter);


/**
 */
function KalturaImageFlavorParamsOutputFilter(){
  KalturaImageFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaImageFlavorParamsOutputFilter = KalturaImageFlavorParamsOutputFilter;

util.inherits(KalturaImageFlavorParamsOutputFilter, KalturaImageFlavorParamsOutputBaseFilter);


/**
 * @param  isLive  int    .
 */
function KalturaLiveEntryFilter(){
  KalturaLiveEntryFilter.super_.call(this);
  this.isLive = null;
};
module.exports.KalturaLiveEntryFilter = KalturaLiveEntryFilter;

util.inherits(KalturaLiveEntryFilter, KalturaLiveEntryBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputFilter(){
  KalturaMediaFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsOutputFilter = KalturaMediaFlavorParamsOutputFilter;

util.inherits(KalturaMediaFlavorParamsOutputFilter, KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaPdfFlavorParamsOutputFilter(){
  KalturaPdfFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsOutputFilter = KalturaPdfFlavorParamsOutputFilter;

util.inherits(KalturaPdfFlavorParamsOutputFilter, KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaScpDropFolderFilter(){
  KalturaScpDropFolderFilter.super_.call(this);
};
module.exports.KalturaScpDropFolderFilter = KalturaScpDropFolderFilter;

util.inherits(KalturaScpDropFolderFilter, KalturaScpDropFolderBaseFilter);


/**
 */
function KalturaSftpDropFolderFilter(){
  KalturaSftpDropFolderFilter.super_.call(this);
};
module.exports.KalturaSftpDropFolderFilter = KalturaSftpDropFolderFilter;

util.inherits(KalturaSftpDropFolderFilter, KalturaSftpDropFolderBaseFilter);


/**
 */
function KalturaSwfFlavorParamsOutputFilter(){
  KalturaSwfFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsOutputFilter = KalturaSwfFlavorParamsOutputFilter;

util.inherits(KalturaSwfFlavorParamsOutputFilter, KalturaSwfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaWidevineFlavorParamsOutputFilter(){
  KalturaWidevineFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaWidevineFlavorParamsOutputFilter = KalturaWidevineFlavorParamsOutputFilter;

util.inherits(KalturaWidevineFlavorParamsOutputFilter, KalturaWidevineFlavorParamsOutputBaseFilter);


/**
 */
function KalturaLiveChannelBaseFilter(){
  KalturaLiveChannelBaseFilter.super_.call(this);
};
module.exports.KalturaLiveChannelBaseFilter = KalturaLiveChannelBaseFilter;

util.inherits(KalturaLiveChannelBaseFilter, KalturaLiveEntryFilter);


/**
 */
function KalturaLiveStreamEntryBaseFilter(){
  KalturaLiveStreamEntryBaseFilter.super_.call(this);
};
module.exports.KalturaLiveStreamEntryBaseFilter = KalturaLiveStreamEntryBaseFilter;

util.inherits(KalturaLiveStreamEntryBaseFilter, KalturaLiveEntryFilter);


/**
 */
function KalturaLiveChannelFilter(){
  KalturaLiveChannelFilter.super_.call(this);
};
module.exports.KalturaLiveChannelFilter = KalturaLiveChannelFilter;

util.inherits(KalturaLiveChannelFilter, KalturaLiveChannelBaseFilter);


/**
 */
function KalturaLiveStreamEntryFilter(){
  KalturaLiveStreamEntryFilter.super_.call(this);
};
module.exports.KalturaLiveStreamEntryFilter = KalturaLiveStreamEntryFilter;

util.inherits(KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntryBaseFilter(){
  KalturaLiveStreamAdminEntryBaseFilter.super_.call(this);
};
module.exports.KalturaLiveStreamAdminEntryBaseFilter = KalturaLiveStreamAdminEntryBaseFilter;

util.inherits(KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamEntryFilter);


/**
 */
function KalturaLiveStreamAdminEntryFilter(){
  KalturaLiveStreamAdminEntryFilter.super_.call(this);
};
module.exports.KalturaLiveStreamAdminEntryFilter = KalturaLiveStreamAdminEntryFilter;

util.inherits(KalturaLiveStreamAdminEntryFilter, KalturaLiveStreamAdminEntryBaseFilter);

