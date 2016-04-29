'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var projectCtrlStub = {
  index: 'projectCtrl.index',
  show: 'projectCtrl.show',
  create: 'projectCtrl.create',
  update: 'projectCtrl.update',
  destroy: 'projectCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var projectIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './project.controller': projectCtrlStub
});

describe('Project API Router:', function() {

  it('should return an express router instance', function() {
    projectIndex.should.equal(routerStub);
  });

  describe('GET /api/projects', function() {

    it('should route to project.controller.index', function() {
      routerStub.get
        .withArgs('/', 'projectCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/projects/:id', function() {

    it('should route to project.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'projectCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/projects', function() {

    it('should route to project.controller.create', function() {
      routerStub.post
        .withArgs('/', 'projectCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/projects/:id', function() {

    it('should route to project.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'projectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/projects/:id', function() {

    it('should route to project.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'projectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/projects/:id', function() {

    it('should route to project.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'projectCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
