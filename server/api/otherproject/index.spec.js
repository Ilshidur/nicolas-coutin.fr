'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var otherprojectCtrlStub = {
  index: 'otherprojectCtrl.index',
  show: 'otherprojectCtrl.show',
  create: 'otherprojectCtrl.create',
  update: 'otherprojectCtrl.update',
  destroy: 'otherprojectCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var otherprojectIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './otherproject.controller': otherprojectCtrlStub
});

describe('Otherproject API Router:', function() {

  it('should return an express router instance', function() {
    otherprojectIndex.should.equal(routerStub);
  });

  describe('GET /api/otherprojects', function() {

    it('should route to otherproject.controller.index', function() {
      routerStub.get
        .withArgs('/', 'otherprojectCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/otherprojects/:id', function() {

    it('should route to otherproject.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'otherprojectCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/otherprojects', function() {

    it('should route to otherproject.controller.create', function() {
      routerStub.post
        .withArgs('/', 'otherprojectCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/otherprojects/:id', function() {

    it('should route to otherproject.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'otherprojectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/otherprojects/:id', function() {

    it('should route to otherproject.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'otherprojectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/otherprojects/:id', function() {

    it('should route to otherproject.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'otherprojectCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
