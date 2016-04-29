'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var employmentCtrlStub = {
  index: 'employmentCtrl.index',
  show: 'employmentCtrl.show',
  create: 'employmentCtrl.create',
  update: 'employmentCtrl.update',
  destroy: 'employmentCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var employmentIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './employment.controller': employmentCtrlStub
});

describe('Employment API Router:', function() {

  it('should return an express router instance', function() {
    employmentIndex.should.equal(routerStub);
  });

  describe('GET /api/employments', function() {

    it('should route to employment.controller.index', function() {
      routerStub.get
        .withArgs('/', 'employmentCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/employments/:id', function() {

    it('should route to employment.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'employmentCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/employments', function() {

    it('should route to employment.controller.create', function() {
      routerStub.post
        .withArgs('/', 'employmentCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/employments/:id', function() {

    it('should route to employment.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'employmentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/employments/:id', function() {

    it('should route to employment.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'employmentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/employments/:id', function() {

    it('should route to employment.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'employmentCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
