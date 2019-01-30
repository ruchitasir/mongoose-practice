// Require Mongoose node module
const mongoose = require('mongoose');

// Create Creator Schema
const creatorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  image: String,
  birthyear: Number,
  deathyear: Number
});

// Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Untitled'
  },
  originCountry: String,
  image: String,
  museum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum'
  },
  creator: creatorSchema
});

// Use Piece schema to create Piece model. Export Piece Model
// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
module.exports = mongoose.model('Piece', pieceSchema);






