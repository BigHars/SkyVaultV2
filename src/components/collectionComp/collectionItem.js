import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';
import { itemsImages } from './images';
import './css/collectionItem.css';
import CollectionTier from './collectionTier';

function CollectionItem({ itemName, tiers }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedTier, setIsClickedTier] = useState(false);
  const dispatch = useDispatch();
  const imageSource = itemsImages[itemName];

  // Henter kanap 'state' fra localStorage, når component loaded
  useEffect(() => {
    const savedState = localStorage.getItem(`favorite_${itemName}`);
    if (savedState) {
      setIsClicked(JSON.parse(savedState));
    }
  }, [itemName]);

  // Gemmer knap state
  useEffect(() => {
    localStorage.setItem(`favorite_${itemName}`, JSON.stringify(isClicked));
  }, [itemName, isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsClickedTier(!isClickedTier);
  }

  const handleFavorite = async () => {
    if (isClicked) {
      await dispatch(removeFavorite(itemName));
    } else {
      await dispatch(addFavorite(itemName));
    }
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <div className="item-container" onClick={handleClick}>
        <img className="collection-icon" src={imageSource} alt={itemName} />
        <p className="item-title">{itemName}</p>
      </div>
      {isClickedTier && (
        <div className="tier-grid">
          {tiers.map((tier, index) => (
            <CollectionTier key={index} tier={tier} />
          ))}
        </div>
      )}
      <button 
        className={isClicked ? 'red-button' : 'green-button'} 
        onClick={handleFavorite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isClicked
          ? (isHovered ? 'Remove from Favorites' : 'Added to Favorites')
          : 'Add to Favorite'
        }
      </button>
    </div>
  );
}

export default CollectionItem;
