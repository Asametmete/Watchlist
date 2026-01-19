import { useEffect, useState } from "react";
import api from "../api";
import WatchlistCard from "../components/WatchlistCard";
import "./Watchlist.css";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const fetchWatchlist = async () => {
    const res = await api.get("/watchlist");
    setWatchlist(res.data);
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const toggleWatched = async (id, currentStatus) => {
    try {
      await api.put(`/watchlist/${id}`, { watched: !currentStatus });
      fetchWatchlist();
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  const removeFromWatchlist = async (id) => {
    try {
      await api.delete(`/watchlist/${id}`);
      fetchWatchlist();
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div className="watchlist-container">
      <h1 className="page-title">My Watchlist</h1>
      
      {watchlist.length === 0 ? (
        <div className="empty-state">
          <p>Watchlist'iniz boş. Home sayfasından film ekleyin! 🎬</p>
        </div>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <WatchlistCard
              key={movie._id}
              movie={movie}
              onToggleWatched={() => toggleWatched(movie._id, movie.watched)}
              onRemove={() => removeFromWatchlist(movie._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;