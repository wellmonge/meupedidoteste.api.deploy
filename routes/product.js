'use strict';

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

var _constants = require('../utils/constants');

var _product3 = require('../seeds/product');

var _product4 = _interopRequireDefault(_product3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const urlBase = "/api/Product";
var urlBase = '/Product';

module.exports = function (app) {
  app.get(urlBase + '/seed', function (req, res) {
    _product2.default.model.insertMany(_product4.default, function (err, result) {
      if (err) res.json(err);

      res.json(result);
    });
  });

  app.get(urlBase + '/findall', function (req, res) {
    _product2.default.model.find({}, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.post(urlBase + '/create', function (req, res) {
    if (!req.body) return;

    var dataItem = new _product2.default.model(req.body);

    dataItem.save(function (err, productResult) {
      if (err) {
        res.json((0, _constants.errorResult)(err.Message));
      }

      res.json((0, _constants.successResult)(productResult));
    });
  });

  app.put(urlBase + '/update', function (req, res) {
    if (!req.body) return;

    var updating = {};
    updating = Object.assign(updating, req.body);
    delete updating._id;

    updating.name = req.body.name;
    updating.unitPrice = req.body.unitPrice;
    updating.multiple = req.body.multiple;

    _product2.default.model.findOneAndUpdate({ name: req.body.oldName }, updating, {
      new: true
    }, function (err, productResult) {
      if (err) {
        res.json((0, _constants.errorResult)(err.Message));
      }

      res.json((0, _constants.successResult)(productResult));
    });
  });

  app.delete(urlBase + '/remove', function (req, res) {
    if (!req.query) return;
    _product2.default.model.findOneAndRemove(req.query, function (err) {
      if (err) {
        res.sendStatus(412);
      }

      res.sendStatus(204);
    });
  });
};