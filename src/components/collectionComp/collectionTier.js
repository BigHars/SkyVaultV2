import React from 'react';
import './css/collectionTier.css';

function CollectionTier({ tier }) {
  return (
    <div className="collection-tier-container">
      <div className="collection-tier-content">
        <h4>Tier {tier.tier}</h4>
        <div className="amount-container">
          <p className="amount-text">Amount: </p>
          <p className="amount">{tier.amountRequired}</p>
        </div>
        {tier.unlocks.map((unlock, index) => (
          <p className={`unlocks-text ${unlock.includes('SkyBlock XP') ? 'special-unlock-text' : ''}`} key={index}>{unlock}</p>
        ))}
      </div>
    </div>
  );
}

export default CollectionTier;