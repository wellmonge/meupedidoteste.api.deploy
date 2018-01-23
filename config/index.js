'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dburi = process.env.MONGODB_URI;

global.db = _mongoose2.default.connect(dburi, { useMongoClient: true });

_mongoose2.default.Promise = _bluebird2.default;

_mongoose2.default.connection.on('error', console.error.bind(console, 'connection error:'));

_mongoose2.default.connection.once('open', function () {
  return 'Database connection is open';
});