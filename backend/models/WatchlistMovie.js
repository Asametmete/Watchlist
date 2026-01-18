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
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model("WatchlistMovie", watchlistMovieSchema);