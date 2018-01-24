'use strict';

var _helpers = require('../helpers');

describe('Product Routes', function () {
  describe('Seeder Rout GET /product/seed', function () {
    it('should CREATE PRODUCTS', function (done) {
      _helpers.request.get('/product/seed').then(function () {
        done();
      }).catch(done);
    });
  });
});