'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var algorithm = 'aes-256-ctr';
var secret = process.env.SECRET;

var utils = {
  encrypt: function encrypt(text) {
    var cipher = _crypto2.default.createCipher(algorithm, secret);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  },
  decrypt: function decrypt(text) {
    var decipher = _crypto2.default.createDecipher(algorithm, secret);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  },
  encryptBuffer: function encryptBuffer(buffer) {
    var cipher = _crypto2.default.createCipher(algorithm, secret);
    var crypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    return crypted;
  },
  decryptBuffer: function decryptBuffer(buffer) {
    var decipher = _crypto2.default.createDecipher(algorithm, secret);
    var dec = Buffer.concat([decipher.update(buffer), decipher.final()]);
    return dec;
  }
};

exports.default = utils;