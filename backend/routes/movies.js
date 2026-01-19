const express = require("express");
const router = express.Router();
const AvailableMovie = require("../models/AvailableMovie");

// Tüm filmleri getir
router.get("/", async (req, res) => {
  try {
    const movies = await AvailableMovie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Tek bir film getir
router.get("/:id", async (req, res) => {
  try {
    const movie = await AvailableMovie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Film bulunamadı" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;