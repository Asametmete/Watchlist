import "./WatchlistCard.css";

function WatchlistCard({ movie, onToggleWatched, onRemove }) {
  return (
    <div className={`watchlist-card ${movie.watched ? "watched" : ""}`}>
      <div className="movie-poster">
        <img 
          src={movie.poster || "https://via.placeholder.com/300x450?text=No+Poster"} 
          alt={movie.title} 
        />
        
        {movie.watched && (
          <div className="watched-overlay">
            <span className="checkmark">✓</span>
          </div>
        )}
        
        <button className="remove-button" onClick={onRemove}>
          ×
        </button>
      </div>
      
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {movie.year && <p className="movie-year">{movie.year}</p>}
        
        <button 
          className={`watch-button ${movie.watched ? "unwatched" : "watched"}`}
          onClick={onToggleWatched}
        >
          {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
        </button>
      </div>
    </div>
  );
}

export default WatchlistCard;