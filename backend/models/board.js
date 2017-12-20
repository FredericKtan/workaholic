'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
  name: {
    type: String,
    required: 'The name is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Number,
    default: Date.now
  }
});

module.exports = mongoose.model('Board', BoardSchema);