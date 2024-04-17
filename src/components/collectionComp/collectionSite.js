import CollectionList from "./collectionList";

function CollectionSite() {
  return (
    <div>
      <div className="header-container">
        <h2 className="section-header">COLLECTIONS OVERVIEW</h2>
      </div>
      <div className="container-content">
        <CollectionList />
      </div>
    </div>
  );
}

export default CollectionSite;