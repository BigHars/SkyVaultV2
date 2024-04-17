import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CollectionSite from './components/collectionComp/collectionSite';
import CollectionFavorites from './components/collectionComp/collectionFavorites';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-link">
            <Link to="/collections">Collections</Link>
          </div>
          <div className="navbar-link">
            <Link to="/favorites">Favorites</Link>
          </div>
        </div>
      </div>
      <div className="content-container">
        <Routes>
          <Route path="/collections" element={<CollectionSite />} />
          <Route path="/favorites" element={<CollectionFavorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
