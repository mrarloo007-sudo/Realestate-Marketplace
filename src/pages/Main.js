import Prop_card from "../component/Prop-card";

let Main = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-tag">Homes Tailored to Your Lifestyle</p>
            <h1>Your Property Is Just a Click Away</h1>
            <p className="hero-description">
              Verified listings. Trusted agents. No hidden costs.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Contact Support</button>
            </div>
          </div>
        </section>
        <section className="search-panel">
          <div className="search-top">
            <button className="tab active">Buy</button>
            <button className="tab">Sell</button>
            <button className="tab">Rent</button>
          </div>
          <div className="search-fields">
            <input type="text" placeholder="Enter type" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Number of Rooms" />
            <button className="btn btn-search">Search</button>
          </div>
        </section>

        <section className="featured">
          <div className="card-grid">
            <Prop_card />
            <Prop_card />
          </div>
        </section>
      </main>
    </div>
  );
};
export default Main;