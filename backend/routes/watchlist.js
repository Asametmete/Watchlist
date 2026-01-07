const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// 🔹 Film ekle
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Tüm filmleri getir
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Filmi watched yap
router.put("/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { watched: req.body.watched },
      { new: true }
    );
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Film sil (opsiyonel ama güzel)
router.delete("/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Film silindi" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
