'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _crypto = require('../utils/crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _constants = require('../utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const urlBase = '/api/user/';
var urlBase = '/user';

module.exports = function (app) {
  app.get(urlBase + '/seed', function (req, res) {
    var dataItem = new _user2.default.model({
      username: 'meupedidoauth',
      password: _crypto2.default.encrypt('meupedidoauth2018')
    });
    _user2.default.model.find({ username: dataItem.username }, function (errFind, result) {
      if (errFind) res.json(errFind);
      if (result && result.length !== 0) {
        res.json(result);
      } else {
        dataItem.save(function (err, userResult) {
          if (err) {
            res.json(err);
          }

          res.json(userResult);
        });
      }
    });
  });

  app.post(urlBase + '/create', function (req, res) {
    if (!req.body) return;
    req.body.password = _crypto2.default.encrypt(req.body.password);
    var dataItem = new _user2.default.Model(req.body);
    dataItem.save().then(function (err) {
      if (err) {
        res.json({
          Success: false,
          Message: _constants.ERROR_MESSAGE
        });
        return;
      }
      res.json({
        Success: true,
        Message: _constants.SUCCESS_MESSAGE
      });
    });
  });

  app.put(urlBase + '/update', function (req, res) {
    if (!req.body) return;

    var updatingUser = {};
    updatingUser = Object.assign(updatingUser, req.body);
    delete updatingUser.id;

    _user2.default.Model.findOneAndUpdate({
      username: updatingUser.username,
      email: updatingUser.email
    }, updatingUser, { new: true, upsert: false }, function (err, result) {
      if (err) {
        res.json({
          Success: false,
          Message: _crypto2.default.errorMessage,
          ServerMessage: err.message
        });
        return;
      }

      res.json({
        Success: true,
        Result: result,
        Message: _crypto2.default.successMessage
      });
    });
  });

  app.delete(urlBase + '/remove', function (req, res) {
    if (!req.body) return;
    _user2.default.Model.findOneAndRemove({
      username: req.body.username,
      email: req.body.email
    }, function (err, result) {
      if (err) {
        res.json({
          Success: false,
          Message: _constants.ERROR_MESSAGE,
          ServerMessage: err.message
        });
        return;
      }
      res.json({
        Success: true,
        Result: result,
        Message: _constants.SUCCESS_MESSAGE
      });
    });
  });
};