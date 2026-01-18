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
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model("AvailableMovie", availableMovieSchema);