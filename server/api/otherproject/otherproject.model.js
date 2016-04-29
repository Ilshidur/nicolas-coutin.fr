'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OtherprojectSchema = new mongoose.Schema({
  name: String,
  previewLink: String,
  link: String,
  tags: [String],
  description: String,
  iconLink: String,
  date: String,
  source: String,
  show: Boolean
});

export default mongoose.model('Otherproject', OtherprojectSchema);
