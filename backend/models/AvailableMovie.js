const mongoose = require("mongoose");

const availableMovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: Number,
  poster: String,
  genre: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10
  },
  runtime: Number, // Dakika cinsinden
  overview: String // Film özeti
}, { 
  timestamps: true 
});

module.exports = mongoose.model("AvailableMovie", availableMovieSchema);