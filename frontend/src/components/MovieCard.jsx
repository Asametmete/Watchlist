import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, onToggle, buttonText }) {
  return (
    <Link to={`/movie/${movie._id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img 
            src={movie.poster || "https://via.placeholder.com/300x450?text=No+Poster"} 
            alt={movie.title} 
          />
          {movie.rating > 0 && (
            <div className="rating-badge">
              ⭐ {movie.rating.toFixed(1)}
            </div>
          )}
          <button 
            className="add-button" 
            onClick={(e) => {
              e.preventDefault();
              onToggle();
            }}
          >
            +
          </button>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          {movie.year && <p className="movie-year">{movie.year}</p>}
          {movie.genre && movie.genre.length > 0 && (
            <div className="genre-badges">
              {movie.genre.slice(0, 2).map((g, index) => (
                <span key={index} className="genre-badge">{g}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;