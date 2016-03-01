'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProjectSchema = new mongoose.Schema({
  name: String,
  previewLink: String,
  link: String,
  tags: [String],
  description: String,
  date: String,
  source: String,
  show: Boolean
});

export default mongoose.model('Project', ProjectSchema);
