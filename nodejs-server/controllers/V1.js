'use strict';

var utils = require('../utils/writer.js');
var V1 = require('../service/V1Service');

module.exports.getV1CommentsParenttypeParentidCategory = function getV1CommentsParenttypeParentidCategory (req, res, next) {
  var parentType = req.swagger.params['parentType'].value;
  var parentId = req.swagger.params['parentId'].value;
  var category = req.swagger.params['category'].value;
  var getChildren = req.swagger.params['getChildren'].value;
  V1.getV1CommentsParenttypeParentidCategory(parentType,parentId,category,getChildren)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getV1NotificationsAccountAccountid = function getV1NotificationsAccountAccountid (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var skip = req.swagger.params['skip'].value;
  V1.getV1NotificationsAccountAccountid(accountId,skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchV1CommentsCommentid = function patchV1CommentsCommentid (req, res, next) {
  var commentId = req.swagger.params['commentId'].value;
  var body = req.swagger.params['body'].value;
  V1.patchV1CommentsCommentid(commentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchV1NotificationsNotificationid = function patchV1NotificationsNotificationid (req, res, next) {
  var notificationId = req.swagger.params['notificationId'].value;
  var body = req.swagger.params['body'].value;
  V1.patchV1NotificationsNotificationid(notificationId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postV1Comments = function postV1Comments (req, res, next) {
  var body = req.swagger.params['body'].value;
  V1.postV1Comments(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postV1Notifications = function postV1Notifications (req, res, next) {
  var body = req.swagger.params['body'].value;
  V1.postV1Notifications(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
