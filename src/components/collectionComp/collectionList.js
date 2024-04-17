import React from 'react';
import { useFetchCollectionsQuery } from "../../store/apis/collectionApi";
import CollectionCategory from "./collectionCategory";
import CollectionItem from "./collectionItem";
import './css/collectionList.css';

function CollectionList() {
  const { data, error, isFetching } = useFetchCollectionsQuery();

  let content;
  if (isFetching) {
    console.log(isFetching); // Log isFetching
    content = <p>loading collections...</p>;
  } else if (error) {
    console.log(error); // Log error
    content = <p>Error loading collections!</p>;
  } else {
    console.log(data); // Log data
    content = Object.values(data.collections).map((collection) => {
      return (
        <div key={collection.name}>
          <CollectionCategory collectionTitle={collection.name} />
          <div className="items-grid">
            {Object.values(collection.items).map((item) => (
              <CollectionItem key={item.name} itemName={item.name} tiers={item.tiers} />
            ))}
          </div>
        </div>
      );
    });
  }

  return <div>{content}</div>;
}

export default CollectionList;
