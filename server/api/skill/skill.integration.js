'use strict';

var app = require('../..');
import request from 'supertest';

var newSkill;

describe('Skill API:', function() {

  describe('GET /api/skills', function() {
    var skills;

    beforeEach(function(done) {
      request(app)
        .get('/api/skills')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          skills = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      skills.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/skills', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/skills')
        .send({
          type: 'skill type',
          list: [{
            skills: [{
              name: 'skill name',
              img_url: 'skill img url'
            }],
            percentage: 54
          }]
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSkill = res.body;
          done();
        });
    });

    it('should respond with the newly created skill', function() {
      newSkill.type.should.equal('skill type');
      newSkill.list.should.have.length(1);
      newSkill.list[0].percentage.should.equal(54);
      newSkill.list[0].skills.should.have.length(1);
      newSkill.list[0].skills[0].name.should.equal('skill name');
      newSkill.list[0].skills[0].img_url.should.equal('skill img url');
    });

  });

  describe('GET /api/skills/:id', function() {
    var skill;

    beforeEach(function(done) {
      request(app)
        .get('/api/skills/' + newSkill._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          skill = res.body;
          done();
        });
    });

    afterEach(function() {
      skill = {};
    });

    it('should respond with the requested skill', function() {
      skill.type.should.equal('skill type');
      skill.list.should.have.length(1);
      skill.list[0].percentage.should.equal(54);
      skill.list[0].skills.should.have.length(1);
      skill.list[0].skills[0].name.should.equal('skill name');
      skill.list[0].skills[0].img_url.should.equal('skill img url');
    });

  });

  describe('PUT /api/skills/:id', function() {
    var updatedSkill;

    beforeEach(function(done) {
      request(app)
        .put('/api/skills/' + newSkill._id)
        .send({
          type: 'skill type:update',
          list: [{
            skills: [{
              name: 'skill name:update',
              img_url: 'skill img url:update'
            }],
            percentage: 54
          }]
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSkill = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSkill = {};
    });

    it('should respond with the updated skill', function() {
      updatedSkill.type.should.equal('skill type:update');
      updatedSkill.list.should.have.length(1);
      updatedSkill.list[0].percentage.should.equal(54);
      updatedSkill.list[0].skills.should.have.length(1);
      updatedSkill.list[0].skills[0].name.should.equal('skill name:update');
      updatedSkill.list[0].skills[0].img_url.should.equal('skill img url:update');
    });

  });

  describe('DELETE /api/skills/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/skills/' + newSkill._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when skill does not exist', function(done) {
      request(app)
        .delete('/api/skills/' + newSkill._id)
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
