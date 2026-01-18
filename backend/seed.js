const mongoose = require("mongoose");
const AvailableMovie = require("./models/AvailableMovie");
require("dotenv").config();

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genre: ["Drama"]
  },
  {
    title: "The Godfather",
    year: 1972,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    genre: ["Crime", "Drama"]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: ["Action", "Crime", "Drama"]
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    genre: ["Crime", "Drama"]
  },
  {
    title: "Forrest Gump",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    genre: ["Drama", "Romance"]
  },
  {
    title: "Fight Club",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    genre: ["Drama"]
  },
  {
    title: "The Matrix",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genre: ["Action", "Sci-Fi"]
  },
  {
    title: "Goodfellas",
    year: 1990,
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    genre: ["Crime", "Drama"]
  },
  {
    title: "Parasite",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genre: ["Drama", "Thriller"]
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    genre: ["Adventure", "Fantasy"]
  },
  {
    title: "Schindler's List",
    year: 1993,
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    genre: ["Drama", "History"]
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    genre: ["Crime", "Thriller"]
  },
  {
    title: "Saving Private Ryan",
    year: 1998,
    poster: "https://image.tmdb.org/t/p/w500/https://media.themoviedb.org/t/p/original/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg.jpg",
    genre: ["Drama", "War"]
  },
  {
    title: "The Green Mile",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    genre: ["Drama", "Fantasy"]
  },
  {
    title: "Spirited Away",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    genre: ["Animation", "Fantasy"]
  },
  {
    title: "The Departed",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    title: "Whiplash",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    genre: ["Drama", "Music"]
  },
  {
    title: "Gladiator",
    year: 2000,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    title: "The Prestige",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    genre: ["Drama", "Mystery", "Thriller"]
  },
  {
    title: "Django Unchained",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    genre: ["Drama", "Western"]
  },
  {
    title: "The Lion King",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    genre: ["Animation", "Adventure", "Drama"]
  },
  {
    title: "WALL·E",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    genre: ["Animation", "Sci-Fi"]
  },
  {
    title: "American History X",
    year: 1998,
    poster: "https://media.themoviedb.org/t/p/original/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
    genre: ["Drama"]
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    poster: "https://media.themoviedb.org/t/p/original/6GZuBIZnBvbt3yi8hfq4RHVIb5P.jpg",
    genre: ["Crime", "Mystery", "Thriller"]
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    genre: ["Animation", "Action", "Adventure"]
  },
  {
    title: "Joker",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    title: "1917",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    genre: ["Drama", "War"]
  },
  {
    title: "Dune",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    genre: ["Action", "Adventure", "Comedy"]
  },
  {
    title: "Inception",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genre: ["Action", "Sci-Fi", "Thriller"]
  },
  {
    title: "The Conjuring",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    genre: ["Horror", "Mystery", "Thriller"]
  },
  {
    title: "Get Out",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    genre: ["Horror", "Mystery", "Thriller"]
  },
  {
    title: "A Quiet Place",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    genre: ["Drama", "Horror", "Sci-Fi"]
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    genre: ["Comedy", "Drama"]
  },
  {
    title: "La La Land",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    genre: ["Comedy", "Drama", "Music", "Romance"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB'ye bağlandı");

    await AvailableMovie.deleteMany({});
    console.log("Eski veriler silindi");

    await AvailableMovie.insertMany(movies);
    console.log(`${movies.length} film eklendi ✅`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Hata:", error);
  }
};

seedDB();