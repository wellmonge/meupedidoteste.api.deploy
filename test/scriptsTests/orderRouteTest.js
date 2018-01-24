'use strict';

var _helpers = require('../helpers');

var _constants = require('../../utils/constants');

describe('Order Routes', function () {
  describe('Rout GET', function () {
    it('should GET all Orders', function (done) {
      _helpers.request.get('/order/findall').then(function (res) {
        (0, _helpers.expect)(res.body).to.be.an('array');
        done();
      });
    });

    it('should GET by ID Order', function (done) {
      _helpers.request.get('/order/findbyid/').then(function (res) {
        // expect(res.body).to.be.an('array');
        done();
      });
    });

    it('should GET by FILTER Order', function (done) {
      _helpers.request.get('/order/findby').query({
        'productToOrder.product.name': 'A280 blaster rifle'
      }).then(function (res) {
        // expect(res.body).to.be.an('array');
        done();
      });
    });
  });

  describe('Rout POST /order/create', function () {
    it('should CREATE a Order', function (done) {
      _helpers.request.post('/order/create').set('Content-Type', 'application/json').send(_constants.defaultOrder).then(function (res) {
        (0, _helpers.expect)(res.body.Data._id).to.be.equal(_constants.defaultOrder._id);
        done();
      });
    });
  });

  describe('Rout PUT /order/update', function () {
    it('should UPDATE a Order', function (done) {
      _helpers.request.put('/order/update').set('Content-Type', 'application/json').send({
        _id: _constants.defaultOrder._id,
        productToOrder: [],
        client: null,
        totalByOrder: 200
      }).then(function (res) {
        (0, _helpers.expect)(res.body.Data.totalByOrder).to.be.equal(200);
        done();
      });
    });
  });

  describe('Rout DELETE /order/remove', function () {
    it('should REMOVE a Order', function (done) {
      _helpers.request.delete('/order/remove/').query({ _id: _constants.defaultOrder._id }).then(function (res) {
        (0, _helpers.expect)(res.status).to.be.equal(204);
        done();
      });
    });
  });
});