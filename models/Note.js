// DEPENDENCIES
const mongoose = require('mongoose');

// ARTICLE SCHEMA
const Schema = mongoose.Schema;
const noteSchema = new Schema({
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
  date: String,
  noteText: String,
});

// CREATE MODEL
const Note = mongoose.model('Note', noteSchema);

// EXPORTS
module.exports = Note;
