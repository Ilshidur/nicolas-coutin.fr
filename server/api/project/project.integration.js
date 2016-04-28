'use strict';

var app = require('../..');
import request from 'supertest';

var newProject;

describe('Project API:', function() {

  describe('GET /api/projects', function() {
    var projects;

    beforeEach(function(done) {
      request(app)
        .get('/api/projects')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          projects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      projects.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/projects', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/projects')
        .send({
          name: 'Project name',
          previewLink: 'Preview link',
          link: 'http://link.com',
          tags: ['tag1', 'tag2', 'tag3'],
          description: 'Project description',
          iconLink: 'http://link.com',
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
          newProject = res.body;
          done();
        });
    });

    it('should respond with the newly created project', function() {
      newProject.name.should.equal('Project name');
      newProject.previewLink.should.equal('Preview link');
      newProject.link.should.equal('http://link.com');
      newProject.tags.should.eql(['tag1', 'tag2', 'tag3']);
      newProject.description.should.equal('Project description');
      newProject.iconLink.should.equal('http://link.com/icon');
      newProject.date.should.equal('Project date');
      newProject.source.should.equal('http://source-code.github.com');
      newProject.show.should.equal(true);
    });

  });

  describe('GET /api/projects/:id', function() {
    var project;

    beforeEach(function(done) {
      request(app)
        .get('/api/projects/' + newProject._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          project = res.body;
          done();
        });
    });

    afterEach(function() {
      project = {};
    });

    it('should respond with the requested project', function() {
      project.name.should.equal('Project name');
      project.previewLink.should.equal('Preview link');
      project.link.should.equal('http://link.com');
      project.tags.should.eql(['tag1', 'tag2', 'tag3']);
      project.description.should.equal('Project description');
      project.iconLink.should.equal('http://link.com/icon');
      project.date.should.equal('Project date');
      project.source.should.equal('http://source-code.github.com');
      project.show.should.equal(true);
    });

  });

  describe('PUT /api/projects/:id', function() {
    var updatedProject;

    beforeEach(function(done) {
      request(app)
        .put('/api/projects/' + newProject._id)
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
          updatedProject = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProject = {};
    });

    it('should respond with the updated project', function() {
      updatedProject.name.should.equal('Project name:update');
      updatedProject.previewLink.should.equal('Preview link:update');
      updatedProject.link.should.equal('http://link.com/update');
      updatedProject.tags.should.eql(['tag1:update', 'tag2:update', 'tag3:update']);
      updatedProject.description.should.equal('Project description:update');
      updatedProject.iconLink.should.equal('http://link.com/icon/update');
      updatedProject.date.should.equal('Project date:update');
      updatedProject.source.should.equal('http://source-code.github.com/update');
      updatedProject.show.should.equal(false);
    });

  });

  describe('DELETE /api/projects/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/projects/' + newProject._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when project does not exist', function(done) {
      request(app)
        .delete('/api/projects/' + newProject._id)
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
