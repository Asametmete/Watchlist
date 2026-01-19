const mongoose = require("mongoose");
const AvailableMovie = require("./models/AvailableMovie");
require("dotenv").config();

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genre: ["Drama"],
    rating: 9.3,
    runtime: 142,
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: "The Godfather",
    year: 1972,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    genre: ["Crime", "Drama"],
    rating: 9.2,
    runtime: 175,
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    runtime: 152,
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    runtime: 154,
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
  },
  {
    title: "Forrest Gump",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    genre: ["Drama", "Romance"],
    rating: 8.8,
    runtime: 142,
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
  },
  {
    title: "Fight Club",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    genre: ["Drama"],
    rating: 8.8,
    runtime: 139,
    overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },
  {
    title: "The Matrix",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    runtime: 136,
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    title: "Goodfellas",
    year: 1990,
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    genre: ["Crime", "Drama"],
    rating: 8.7,
    runtime: 146,
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners."
  },
  {
    title: "Parasite",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genre: ["Drama", "Thriller"],
    rating: 8.6,
    runtime: 132,
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    genre: ["Adventure", "Fantasy"],
    rating: 8.9,
    runtime: 201,
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },
  {
    title: "Schindler's List",
    year: 1993,
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    genre: ["Drama", "History"],
    rating: 8.9,
    runtime: 195,
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution."
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    genre: ["Crime", "Thriller"],
    rating: 8.6,
    runtime: 118,
    overview: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer."
  },
  {
    title: "Saving Private Ryan",
    year: 1998,
    poster: "https://media.themoviedb.org/t/p/original/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    genre: ["Drama", "War"],
    rating: 8.6,
    runtime: 169,
    overview: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
  },
  {
    title: "The Green Mile",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    genre: ["Drama", "Fantasy"],
    rating: 8.6,
    runtime: 189,
    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
  },
  {
    title: "Spirited Away",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    genre: ["Animation", "Fantasy"],
    rating: 8.6,
    runtime: 125,
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits."
  },
  {
    title: "The Departed",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    runtime: 151,
    overview: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
  },
  {
    title: "Whiplash",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    genre: ["Drama", "Music"],
    rating: 8.5,
    runtime: 106,
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing."
  },
  {
    title: "Gladiator",
    year: 2000,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.5,
    runtime: 155,
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    title: "The Prestige",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    genre: ["Drama", "Mystery", "Thriller"],
    rating: 8.5,
    runtime: 130,
    overview: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
  },
  {
    title: "Django Unchained",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    genre: ["Drama", "Western"],
    rating: 8.4,
    runtime: 165,
    overview: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
  },
  {
    title: "The Lion King",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    genre: ["Animation", "Adventure", "Drama"],
    rating: 8.5,
    runtime: 88,
    overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    title: "WALL·E",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    genre: ["Animation", "Sci-Fi"],
    rating: 8.4,
    runtime: 98,
    overview: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
  },
  {
    title: "American History X",
    year: 1998,
    poster: "https://media.themoviedb.org/t/p/original/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
    genre: ["Drama"],
    rating: 8.5,
    runtime: 119,
    overview: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    poster: "https://media.themoviedb.org/t/p/original/6GZuBIZnBvbt3yi8hfq4RHVIb5P.jpg",
    genre: ["Crime", "Mystery", "Thriller"],
    rating: 8.5,
    runtime: 106,
    overview: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup."
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    runtime: 181,
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more."
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    genre: ["Animation", "Action", "Adventure"],
    rating: 8.4,
    runtime: 117,
    overview: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat."
  },
  {
    title: "Joker",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    runtime: 122,
    overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution."
  },
  {
    title: "1917",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    genre: ["Drama", "War"],
    rating: 8.3,
    runtime: 119,
    overview: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message."
  },
  {
    title: "Dune",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.0,
    runtime: 155,
    overview: "Paul Atreides, a brilliant and gifted young man must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    genre: ["Action", "Adventure", "Comedy"],
    rating: 8.0,
    runtime: 139,
    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led."
  },
  {
    title: "Inception",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    runtime: 148,
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    title: "The Conjuring",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.5,
    runtime: 112,
    overview: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
  },
  {
    title: "Get Out",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.7,
    runtime: 104,
    overview: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
  },
  {
    title: "A Quiet Place",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    genre: ["Drama", "Horror", "Sci-Fi"],
    rating: 7.5,
    runtime: 90,
    overview: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    genre: ["Comedy", "Drama"],
    rating: 8.1,
    runtime: 99,
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years."
  },
  {
    title: "La La Land",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    genre: ["Comedy", "Drama", "Music", "Romance"],
    rating: 8.0,
    runtime: 128,
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
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