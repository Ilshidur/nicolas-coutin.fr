'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EmploymentSchema = new mongoose.Schema({
  title: String,
  date: String,
  place: String,
  description: String
});

export default mongoose.model('Employment', EmploymentSchema);
