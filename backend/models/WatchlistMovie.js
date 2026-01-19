const mongoose = require("mongoose");

const watchlistMovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: Number,
  poster: String,
  watched: {
    type: Boolean,
    default: false
  },
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
  runtime: Number,
  overview: String
}, { 
  timestamps: true 
});

module.exports = mongoose.model("WatchlistMovie", watchlistMovieSchema);