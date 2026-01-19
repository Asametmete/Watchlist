import { useEffect, useState } from "react";
import api from "../api";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    const res = await api.get("/movies");
    setMovies(res.data);
    setFilteredMovies(res.data);
    
    // Tüm kategorileri çıkar
    const allGenres = res.data.flatMap(movie => movie.genre || []);
    const uniqueGenres = ["All", ...new Set(allGenres)];
    setGenres(uniqueGenres);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    let filtered = movies;

    // Kategori filtrele
    if (selectedGenre !== "All") {
      filtered = filtered.filter(movie => 
        movie.genre && movie.genre.includes(selectedGenre)
      );
    }

    // Arama filtrele
    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [searchQuery, selectedGenre, movies]);

  const addToWatchlist = async (movie) => {
    try {
      const { _id, __v, ...movieData } = movie;
      await api.post("/watchlist", movieData);
      alert("Film watchlist'e eklendi ✅");
    } catch (error) {
      console.error("Hata:", error.response?.data);
      if (error.response?.data?.error?.includes("zaten")) {
        alert("Bu film zaten watchlist'te!");
      } else {
        alert("Hata: " + (error.response?.data?.error || "Bilinmeyen hata"));
      }
    }
  };

  return (
    <div className="home-container">
      <h1 className="page-title">Movies</h1>
      
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Genre Filter */}
      <div className="genre-filter">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      {filteredMovies.length === 0 ? (
        <div className="no-results">
          <p>No movies found 😔</p>
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onToggle={() => addToWatchlist(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;