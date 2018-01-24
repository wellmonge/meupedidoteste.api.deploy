'use strict';

var _helpers = require('../helpers');

describe('Client Routes', function () {
  describe('Seeder Rout GET /client/seed', function () {
    it('should CREATE CLIENTS', function (done) {
      _helpers.request.get('/client/seed').then(function () {
        done();
      }).catch(done);
    });
  });
});