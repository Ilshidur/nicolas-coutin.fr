'use strict';

var app = require('../..');
import request from 'supertest';

var newEmployment;

describe('Employment API:', function() {

  describe('GET /api/employments', function() {
    var employments;

    beforeEach(function(done) {
      request(app)
        .get('/api/employments')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          employments = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      employments.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/employments', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/employments')
        .send({
          title: 'Employment title',
          date: 'Employment date',
          place: 'Employment place',
          description: 'Employment description',
          tags: ['tag1', 'tag2', 'tag3']
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEmployment = res.body;
          done();
        });
    });

    it('should respond with the newly created employment', function() {
      newEmployment.title.should.equal('Employment title');
      newEmployment.date.should.equal('Employment date');
      newEmployment.place.should.equal('Employment place');
      newEmployment.description.should.equal('Employment description');
      newEmployment.tags.should.eql(['tag1', 'tag2', 'tag3']);
    });

  });

  describe('GET /api/employments/:id', function() {
    var employment;

    beforeEach(function(done) {
      request(app)
        .get('/api/employments/' + newEmployment._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          employment = res.body;
          done();
        });
    });

    afterEach(function() {
      employment = {};
    });

    it('should respond with the requested employment', function() {
      employment.title.should.equal('Employment title');
      employment.date.should.equal('Employment date');
      employment.place.should.equal('Employment place');
      employment.description.should.equal('Employment description');
      employment.tags.should.eql(['tag1', 'tag2', 'tag3']);
    });

  });

  describe('PUT /api/employments/:id', function() {
    var updatedEmployment;

    beforeEach(function(done) {
      request(app)
        .put('/api/employments/' + newEmployment._id)
        .send({
          title: 'Employment title update',
          date: 'Employment date update',
          place: 'Employment place update',
          description: 'Employment description update',
          tags: ['tag1:update', 'tag2:update', 'tag3:update']
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEmployment = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEmployment = {};
    });

    it('should respond with the updated employment', function() {
      updatedEmployment.title.should.equal('Employment title update');
      updatedEmployment.date.should.equal('Employment date update');
      updatedEmployment.place.should.equal('Employment place update');
      updatedEmployment.description.should.equal('Employment description update');
      updatedEmployment.tags.should.eql(['tag1:update', 'tag2:update', 'tag3:update']);
    });

  });

  describe('DELETE /api/employments/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/employments/' + newEmployment._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when employment does not exist', function(done) {
      request(app)
        .delete('/api/employments/' + newEmployment._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
