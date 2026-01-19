const express = require("express");
const router = express.Router();
const WatchlistMovie = require("../models/WatchlistMovie");


router.post("/", async (req, res) => {
  try {
  
    const existingMovie = await WatchlistMovie.findOne({ 
      title: req.body.title 
    });
    
    if (existingMovie) {
      return res.status(400).json({ 
        error: "This movie exist in the watchlist" 
      });
    }

    const movie = new WatchlistMovie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const movies = await WatchlistMovie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMovie = await WatchlistMovie.findByIdAndUpdate(
      req.params.id,
      { watched: req.body.watched },
      { new: true }
    );
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await WatchlistMovie.findByIdAndDelete(req.params.id);
    res.json({ message: "Film deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;