'use strict';

var _helpers = require('../helpers');

var _constants = require('../../utils/constants');

describe('Client Routes', function () {
  var clientUpdated = 'Client updated';

  describe('Rout GET /client/findall', function () {
    it('should GET all clients', function (done) {
      _helpers.request.get('/client/findall').then(function (res) {
        (0, _helpers.expect)(res.body).to.be.an('array');
        done();
      }).catch(done());
    });
  });

  describe('Rout POST /client/create', function () {
    it('should CREATE a client', function (done) {
      _helpers.request.post('/client/create').set('Content-Type', 'application/json').send(_constants.defaultClient).then(function (res) {
        (0, _helpers.expect)(res.body.Data.name).to.be.eql(_constants.defaultClient.name, "Name's client matched!");
        done();
      }).catch(done);
    });
  });

  describe('Rout PUT /client/update', function () {
    it('should UPDATE a client', function (done) {
      _helpers.request.put('/client/update').send({
        name: clientUpdated,
        oldName: _constants.defaultClient.name
      }).then(function (res) {
        (0, _helpers.expect)(res.body.Data.name).to.be.equal(clientUpdated, "Name's client matched!");
        done();
      }).catch(done);
    });
  });

  describe('Rout DELETE /client/remove', function () {
    it('should REMOVE a client', function (done) {
      _helpers.request.delete('/client/remove').query({ name: clientUpdated }).then(function (res) {
        (0, _helpers.expect)(res.status).to.be.equal(204);
        done();
      }).catch(done);
    });
  });
});