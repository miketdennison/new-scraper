// DEPENDENCIES
const mongoose = require('mongoose');

// ARTICLE SCHEMA
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  headline: {
    type: String,
    require: true,
    unique: true,
  },
  summary: {
    type: String,
    required: true,
  },
  date: String,
  saved: {
    type: Boolean,
    default: false,
  },
});

// CREATE MODEL
const Article = mongoose.model('Article', articleSchema);

// EXPORTS
module.exports = Article;
