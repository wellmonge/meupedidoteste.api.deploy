'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
  username: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now }
});

exports.default = {
  Schema: userSchema,
  model: _mongoose2.default.model('User', userSchema)
};