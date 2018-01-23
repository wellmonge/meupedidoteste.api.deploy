'use strict';

var _helpers = require('../helpers');

describe('Users Seeders', function () {
  describe('Seeder Rout GET /user/seed', function () {
    it('should CREATE USERS', function (done) {
      _helpers.request.get('/user/seed').then(function () {
        done();
      }).catch(done);
    });
  });
});