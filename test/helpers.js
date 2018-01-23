'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = exports.request = undefined;

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = (0, _supertest2.default)(_app2.default);
var expect = _chai2.default.expect;
exports.request = request;
exports.expect = expect;