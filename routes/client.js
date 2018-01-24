'use strict';

var _client = require('../models/client');

var _client2 = _interopRequireDefault(_client);

var _client3 = require('../seeds/client');

var _client4 = _interopRequireDefault(_client3);

var _constants = require('../utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const urlBase = "/api/client";
var urlBase = '/client';

module.exports = function (app) {
  app.get(urlBase + '/seed', function (req, res) {
    _client2.default.model.insertMany(_client4.default, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.get(urlBase + '/findall', function (req, res) {
    _client2.default.model.find({}, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.post(urlBase + '/create', function (req, res) {
    if (!req.body) return;
    var dataItem = new _client2.default.model(req.body);
    dataItem.save(function (err, clientResult) {
      if (err) {
        res.json((0, _constants.errorResult)(err.Message));
      }

      res.json((0, _constants.successResult)(clientResult));
    });
  });

  app.put(urlBase + '/update', function (req, res) {
    if (!req.body) return;

    var updating = {};
    updating = Object.assign(updating, req.body);
    updating.name = req.body.name;
    delete updating._id;

    _client2.default.model.findOneAndUpdate({ name: req.body.oldName }, updating, {
      new: true
    }, function (err, clientResult) {
      if (err) {
        res.json((0, _constants.errorResult)(err.Message));
      }

      res.json((0, _constants.successResult)(clientResult));
    });
  });

  app.delete(urlBase + '/remove', function (req, res) {
    if (!req.query) return;
    _client2.default.model.findOneAndRemove(req.query, function (err) {
      if (err) {
        res.sendStatus(412);
      }

      res.sendStatus(204);
    });
  });
};