let Prop_filter = () => {
  return (
    <section className="search-panel">
      <div className="search-top">
        <button className="tab active">Buy</button>
        <button className="tab">Sell</button>
      </div>
      <div className="search-fields">
        <form>
          <input type="text" placeholder="Enter type" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Number of Rooms" />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
    </section>
  );
};
export default Prop_filter;