let Common_title = (props) => {
    return(
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-tag">Homes Tailored to Your Lifestyle</p>
            <h1>{props.title}</h1>
            <p className="hero-description">
              Verified listings. Trusted agents. No hidden costs.
            </p>
          </div>
        </section>
    );
}
export default Common_title;