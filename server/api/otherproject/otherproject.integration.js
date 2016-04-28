'use strict';

var app = require('../..');
import request from 'supertest';

var newOtherproject;

describe('Otherproject API:', function() {

  describe('GET /api/otherprojects', function() {
    var otherprojects;

    beforeEach(function(done) {
      request(app)
        .get('/api/otherprojects')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          otherprojects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      otherprojects.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/otherprojects', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/otherprojects')
        .send({
          name: 'Project name',
          previewLink: 'Preview link',
          link: 'http://link.com',
          tags: ['tag1', 'tag2', 'tag3'],
          description: 'Project description',
          iconLink: 'http://link.com/icon',
          date: 'Project date',
          source: 'http://source-code.github.com',
          show: true
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOtherproject = res.body;
          done();
        });
    });

    it('should respond with the newly created otherproject', function() {
      newOtherproject.name.should.equal('Project name');
      newOtherproject.previewLink.should.equal('Preview link');
      newOtherproject.link.should.equal('http://link.com');
      newOtherproject.tags.should.eql(['tag1', 'tag2', 'tag3']);
      newOtherproject.description.should.equal('Project description');
      newOtherproject.iconLink.should.equal('http://link.com');
      newOtherproject.date.should.equal('Project date');
      newOtherproject.source.should.equal('http://source-code.github.com');
      newOtherproject.show.should.equal(true);
    });

  });

  describe('GET /api/otherprojects/:id', function() {
    var otherproject;

    beforeEach(function(done) {
      request(app)
        .get('/api/otherprojects/' + newOtherproject._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          otherproject = res.body;
          done();
        });
    });

    afterEach(function() {
      otherproject = {};
    });

    it('should respond with the requested otherproject', function() {
      otherproject.name.should.equal('Project name');
      otherproject.previewLink.should.equal('Preview link');
      otherproject.link.should.equal('http://link.com');
      otherproject.tags.should.eql(['tag1', 'tag2', 'tag3']);
      otherproject.description.should.equal('Project description');
      otherproject.iconLink.should.equal('http://link.com');
      otherproject.date.should.equal('Project date');
      otherproject.source.should.equal('http://source-code.github.com');
      otherproject.show.should.equal(true);
    });

  });

  describe('PUT /api/otherprojects/:id', function() {
    var updatedOtherproject;

    beforeEach(function(done) {
      request(app)
        .put('/api/otherprojects/' + newOtherproject._id)
        .send({
          name: 'Project name:update',
          previewLink: 'Preview link:update',
          link: 'http://link.com/update',
          tags: ['tag1:update', 'tag2:update', 'tag3:update'],
          description: 'Project description:update',
          iconLink: 'http://link.com/icon/update',
          date: 'Project date:update',
          source: 'http://source-code.github.com/update',
          show: false
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOtherproject = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOtherproject = {};
    });

    it('should respond with the updated otherproject', function() {
      updatedOtherproject.name.should.equal('Project name:update');
      updatedOtherproject.previewLink.should.equal('Preview link:update');
      updatedOtherproject.link.should.equal('http://link.com/update');
      updatedOtherproject.tags.should.eql(['tag1:update', 'tag2:update', 'tag3:update']);
      updatedOtherproject.description.should.equal('Project description:update');
      updatedOtherproject.link.should.equal('http://link.com/icon/update');
      updatedOtherproject.date.should.equal('Project date:update');
      updatedOtherproject.source.should.equal('http://source-code.github.com/update');
      updatedOtherproject.show.should.equal(false);
    });

  });

  describe('DELETE /api/otherprojects/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/otherprojects/' + newOtherproject._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when otherproject does not exist', function(done) {
      request(app)
        .delete('/api/otherprojects/' + newOtherproject._id)
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
