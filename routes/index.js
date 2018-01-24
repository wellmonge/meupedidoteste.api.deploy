'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _crypto = require('../utils/crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({ message: 'service is running.' });
  });

  app.use('/api', function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      _jsonwebtoken2.default.verify(token, app.get('superSecret'), function (err, decoded) {
        if (err) {
          next(err);
        }
        req.decoded = decoded;
        next();
      });
    }
    return res.sendStatus(403);
  });

  app.post('/Authentication', function (req, res) {
    _user2.default.model.findOne({ username: req.body.username }, function (err, user) {
      if (err) return;
      if (!user) {
        res.json({ success: false, message: 'Falha na aut�ntica��o. Usu�rio n�o encontrado.' });
      } else {
        var decp = _crypto2.default.decrypt(user.password);
        if (decp !== req.body.password) {
          res.json({ success: false, message: 'Falha na aut�ntica��o. Senha incorreta.' });
        } else {
          var token = _jsonwebtoken2.default.sign(user, app.get('superSecret'), { expiresIn: 3 });
          res.json({
            success: true,
            message: 'Token gerado com sucesso!',
            user: user,
            token: token
          });
        }
      }
    });
  });
};