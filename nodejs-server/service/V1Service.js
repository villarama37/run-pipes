'use strict';


/**
 * Retrieves all comments for given parent object.
 *
 * parentType String The type of object that the comment is attached to
 * parentId Integer ID of the object that the comment is attached to
 * category String The type of comment
 * getChildren Boolean Toggle for retrieving comments for children, if supported for the parentType. See docs for more info (optional)
 * returns inline_response_200_1
 **/
exports.getV1CommentsParenttypeParentidCategory = function(parentType,parentId,category,getChildren) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "ownerType" : "internal",
    "trialId" : 5,
    "lastUpdatedBy" : 2,
    "messageId" : 6,
    "acknowledgedBy" : 2,
    "message" : "message",
    "parentType" : "scheduleAnswer",
    "parentId" : 1,
    "createdBy" : 9,
    "recipients" : [ 4, 4 ],
    "commentId" : 0,
    "createdTime" : 7.061401241503109105224211816675961017608642578125,
    "lastUpdatedTime" : 3.61607674925191080461672754609026014804840087890625,
    "category" : "flag",
    "acknowledgedTime" : 5.63737665663332876420099637471139430999755859375
  }, {
    "ownerType" : "internal",
    "trialId" : 5,
    "lastUpdatedBy" : 2,
    "messageId" : 6,
    "acknowledgedBy" : 2,
    "message" : "message",
    "parentType" : "scheduleAnswer",
    "parentId" : 1,
    "createdBy" : 9,
    "recipients" : [ 4, 4 ],
    "commentId" : 0,
    "createdTime" : 7.061401241503109105224211816675961017608642578125,
    "lastUpdatedTime" : 3.61607674925191080461672754609026014804840087890625,
    "category" : "flag",
    "acknowledgedTime" : 5.63737665663332876420099637471139430999755859375
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all notifications for given accountId.
 *
 * accountId Integer 
 * skip List Optional properties to filter by. Can be multiple. (optional)
 * returns inline_response_200
 **/
exports.getV1NotificationsAccountAccountid = function(accountId,skip) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "trialId" : 2,
    "completedTime" : 2.027123023002321833274663731572218239307403564453125,
    "messageId" : 1,
    "referenceType" : "comment",
    "locationType" : "locationType",
    "readTime" : 3.61607674925191080461672754609026014804840087890625,
    "message" : "message",
    "referenceId" : 5,
    "accountId" : 6,
    "createdBy" : 7,
    "locationId" : 5,
    "createdTime" : 9.301444243932575517419536481611430644989013671875,
    "notificationId" : 0,
    "location" : "{}"
  }, {
    "trialId" : 2,
    "completedTime" : 2.027123023002321833274663731572218239307403564453125,
    "messageId" : 1,
    "referenceType" : "comment",
    "locationType" : "locationType",
    "readTime" : 3.61607674925191080461672754609026014804840087890625,
    "message" : "message",
    "referenceId" : 5,
    "accountId" : 6,
    "createdBy" : 7,
    "locationId" : 5,
    "createdTime" : 9.301444243932575517419536481611430644989013671875,
    "notificationId" : 0,
    "location" : "{}"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a new comment with given data.
 *
 * commentId Integer 
 * body Body_2  (optional)
 * returns String
 **/
exports.patchV1CommentsCommentid = function(commentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a new notification with given data.
 *
 * notificationId Integer 
 * body Body_3  (optional)
 * returns String
 **/
exports.patchV1NotificationsNotificationid = function(notificationId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new comment with given data.
 *
 * body Body  (optional)
 * returns inline_response_200_2
 **/
exports.postV1Comments = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new notification with given data.
 *
 * body Body_1  (optional)
 * returns inline_response_200_3
 **/
exports.postV1Notifications = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

