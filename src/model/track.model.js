const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  isrc: {
    // siempre que creamos un modelo tiene que haber un IDENTIFICADOR
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contributors: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  lineCYear: {
    type: Number,
    required: true,
    trim: true,
  },
  lineCPublisher: {
    type: String,
    required: true,
    trim: true,
  },
});

const Track = mongoose.model("Track", trackSchema); //
module.exports = Track; // que queremos exportar
