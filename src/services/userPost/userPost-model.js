'use strict';

// userPost-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPostSchema = new Schema({
  content: { type: String, required: true },
  src: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userPostModel = mongoose.model('userPost', userPostSchema);

module.exports = userPostModel;
