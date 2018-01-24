'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productSchema = new _mongoose.Schema({
  name: { type: String, required: true },
  unitPrice: { type: Number },
  multiple: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

exports.default = {
  Schema: productSchema,
  model: _mongoose2.default.model('product', productSchema)
};