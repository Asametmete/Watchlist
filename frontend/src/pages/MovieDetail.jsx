import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await api.get(`/movies/${id}`);
        setMovie(res.data);
      } catch (error) {
        console.error("Film bulunamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const addToWatchlist = async () => {
    try {
      const { _id, __v, ...movieData } = movie;
      await api.post("/watchlist", movieData);
      alert("Film watchlist'e eklendi ✅");
    } catch (error) {
      if (error.response?.data?.error?.includes("zaten")) {
        alert("Bu film zaten watchlist'te!");
      } else {
        alert("Hata: " + (error.response?.data?.error || "Bilinmeyen hata"));
      }
    }
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="error">Film bulunamadı</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="movie-detail-content">
        <div className="movie-poster-large">
          <img 
            src={movie.poster || "https://via.placeholder.com/500x750?text=No+Poster"} 
            alt={movie.title} 
          />
        </div>

        <div className="movie-details">
          <h1 className="movie-title">{movie.title}</h1>
          
          <div className="movie-meta">
            {movie.year && <span className="meta-item">{movie.year}</span>}
            {movie.runtime && (
              <span className="meta-item">{formatRuntime(movie.runtime)}</span>
            )}
            {movie.rating > 0 && (
              <span className="meta-item rating">
                ⭐ {movie.rating.toFixed(1)}/10
              </span>
            )}
          </div>

          {movie.genre && movie.genre.length > 0 && (
            <div className="genre-list">
              {movie.genre.map((g, index) => (
                <span key={index} className="genre-tag">{g}</span>
              ))}
            </div>
          )}

          {movie.overview && (
            <div className="overview-section">
              <h3>Overview</h3>
              <p className="overview-text">{movie.overview}</p>
            </div>
          )}

          <button className="add-to-watchlist-btn" onClick={addToWatchlist}>
            + Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;