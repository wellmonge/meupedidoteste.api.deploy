'use strict';

var _order = require('../models/order');

var _order2 = _interopRequireDefault(_order);

var _constants = require('../utils/constants');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const urlBase = "/api/Order";
var urlBase = '/order';

module.exports = function (app) {
  app.get(urlBase + '/findall', function (req, res) {
    _order2.default.model.find({}, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.get(urlBase + '/findby', function (req, res) {
    _order2.default.model.find(req.query, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.get(urlBase + '/findbyid/:id', function (req, res) {
    _order2.default.model.findById(req.param.id, function (err, result) {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  });

  app.post(urlBase + '/create', function (req, res) {
    if (!req.body) return;
    var dataItem = new _order2.default.model(req.body);
    req.body.productToOrders.forEach(function (element) {
      dataItem.productToOrder.push(new _order2.default.ProductToOrder(element));
    });
    dataItem.save(function (err, OrderResult) {
      if (err) {
        res.json((0, _constants.errorResult)(err.Message));
      }

      res.json((0, _constants.successResult)(OrderResult));
    });
  });

  app.put(urlBase + '/update', function (req, res) {
    if (!req.body) return;

    var updating = {};
    updating = Object.assign(updating, req.body);

    _order2.default.model.findByIdAndUpdate({ _id: req.body._id }, updating, {
      new: true
    }, function (err, OrderResult) {
      if (err) res.json((0, _constants.errorResult)(err.Message));

      res.json((0, _constants.successResult)(OrderResult));
    });
  });

  app.delete(urlBase + '/remove', function (req, res) {
    if (!req.query) return;
    _order2.default.model.findOneAndRemove(req.query, function (err) {
      if (err) {
        res.sendStatus(412);
      }

      res.sendStatus(204);
    });
  });
};