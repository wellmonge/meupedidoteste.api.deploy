'use strict';

var _helpers = require('../helpers');

var _constants = require('../../utils/constants');

describe('Product Routes', function () {
  var productUpdated = 'Product updated';

  describe('Rout GET /product/findall', function () {
    it('should GET all products', function (done) {
      _helpers.request.get('/product/findall').then(function (res) {
        (0, _helpers.expect)(res.body).to.be.an('array');
        done();
      }).catch(done);
    });
  });

  describe('Rout POST /product/create', function () {
    it('should CREATE a product', function (done) {
      _helpers.request.post('/product/create').set('Content-Type', 'application/json').send(_constants.defaultProduct).then(function (res) {
        (0, _helpers.expect)(res.body.Data.name).to.be.equal(_constants.defaultProduct.name, "Name's product matched!");
        done();
      }).catch(done);
    });
  });

  describe('Rout PUT /product/update', function () {
    it('should UPDATE a product', function (done) {
      _helpers.request.put('/product/update').set('Content-Type', 'application/json').send({
        name: productUpdated,
        unitPrice: 23000,
        multiple: 2,
        oldName: _constants.defaultProduct.name
      }).then(function (res) {
        (0, _helpers.expect)(res.body.Data.name).to.be.equal(productUpdated, "Name's product matched!");
        done();
      }).catch(done);
    });
  });

  describe('Rout DELETE /product/remove', function () {
    it('should REMOVE a product', function (done) {
      _helpers.request.delete('/product/remove/').query({ name: productUpdated }).then(function (res) {
        (0, _helpers.expect)(res.status).to.be.equal(204);
        done();
      }).catch(done);
    });
  });
});