import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-container">
            <Link to="/" className="logo">
              🎬 Watchlist
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/watchlist">Watchlist</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;