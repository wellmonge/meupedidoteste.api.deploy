'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _product = require('./product');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productToOrderSchema = new _mongoose.Schema({
  product: _product2.default.Schema,
  unitPrice: { type: Number },
  quantity: { type: Number },
  totalByProduct: { type: Number }
});

var orderSchema = new _mongoose.Schema({
  productToOrder: [productToOrderSchema],
  client: _client2.default.Schema,
  totalByOrder: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

exports.default = {
  Schema: orderSchema,
  ProductToOrder: _mongoose2.default.model('productToOrder', productToOrderSchema),
  model: _mongoose2.default.model('order', orderSchema)
};