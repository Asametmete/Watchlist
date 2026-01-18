const express = require("express");
const router = express.Router();
const WatchlistMovie = require("../models/WatchlistMovie");

// 🔹 Film ekle
router.post("/", async (req, res) => {
  try {
    // Aynı film var mı kontrol et
    const existingMovie = await WatchlistMovie.findOne({ 
      title: req.body.title 
    });
    
    if (existingMovie) {
      return res.status(400).json({ 
        error: "Bu film zaten watchlist'te!" 
      });
    }

    const movie = new WatchlistMovie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Tüm filmleri getir
router.get("/", async (req, res) => {
  try {
    const movies = await WatchlistMovie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Filmi watched yap
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

// 🔹 Film sil
router.delete("/:id", async (req, res) => {
  try {
    await WatchlistMovie.findByIdAndDelete(req.params.id);
    res.json({ message: "Film silindi" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;