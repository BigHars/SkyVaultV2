import React, { useState, useEffect } from 'react';
import CollectionItem from './collectionItem';

function CollectionFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavoritesFromDb();
  }, []);

  const fetchFavoritesFromDb = async () => {
    try {
      const response = await fetch('http://localhost:3001/favorites');
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div>
    <div className="header-container">
      <h2 className="section-header">FAVORITES OVERVIEW</h2>
    </div>
    <div className="container-content">
    <div>
      <h2>Favorites</h2>
      <div className="favorites-container">
        {favorites.map((favorite, index) => (
          <CollectionItem key={index} itemName={favorite.id} tiers={favorite.tiers} />
        ))}
      </div>
    </div>
    </div>
  </div>

  );
}

export default CollectionFavorites;
