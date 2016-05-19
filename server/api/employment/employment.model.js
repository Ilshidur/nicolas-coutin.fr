'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EmploymentSchema = new mongoose.Schema({
  title: String,
  date: String,
  employer: String,
  employerLink: String,
  description: String,
  tags: [String]
});

export default mongoose.model('Employment', EmploymentSchema);
