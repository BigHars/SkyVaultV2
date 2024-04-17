import { collectionImages } from "./images";
import './css/collectionCategory.css';

function CollectionCategory({ collectionTitle }) {
  const imageSource = collectionImages[collectionTitle];

  return (
    <div className="collection-title">
      <img className="collection-icon" src={imageSource} alt={collectionTitle} />
      <h3>{collectionTitle}</h3>
    </div>
  );
}

export default CollectionCategory;