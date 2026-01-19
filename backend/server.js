const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const watchlistRoutes = require("./routes/watchlist");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend & MongoDB working");
});

app.use("/api/watchlist", watchlistRoutes);
app.use("/api/movies", require("./routes/movies"));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connect to MongoDB succesfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server work on the port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
