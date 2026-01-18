const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const watchlistRoutes = require("./routes/watchlist");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend & MongoDB çalışıyor 🚀");
});

app.use("/api/watchlist", watchlistRoutes);
app.use("/api/movies", require("./routes/movies"));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB bağlantısı başarılı");
    app.listen(process.env.PORT, () => {
      console.log(`Server ${process.env.PORT} portunda çalışıyor`);
    });
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });
