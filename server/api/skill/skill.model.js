'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SkillText = new mongoose.Schema({
  name: String,
  img_url: String
});

var SkillSchema = new mongoose.Schema({
  skills: [SkillText],
  percentage: {
    type: Number, min: 0, max: 100
  }
});

var SkillsListSchema = new mongoose.Schema({
  type: String,
  list: [SkillSchema]
});

export default mongoose.model('Skill', SkillsListSchema);
