'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressLoad = require('express-load');

var _expressLoad2 = _interopRequireDefault(_expressLoad);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _errorHandler = require('error-handler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_dotenv2.default.config();

// all environments
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.text());

app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use((0, _methodOverride2.default)('_method'));
app.set('superSecret', process.env.SECRET);

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(_errorHandler2.default);
}
// production only
if (env === 'production') {}
// TODO


// load modules
(0, _expressLoad2.default)('config').then('utils').then('routes').into(app);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

exports.default = app;