import "../styles/MainContext.scss";

const MainContext = () => {
  return (
    <>
      <header className="hero-section">
        <div className="container text-center text-md-start">
          <h1 className="display-1">
            PHOTO
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GRAPHY
          </h1>

          <p className="mt-4">
            Pellentesque Mauris A Lobortis In Bibendum Sed Lobortis Semper. Eget
            Eu Vel Eu Vitae.
          </p>

          <button
            className="btn btn-outline-light mt-3 order-button"
            aria-label="Order Photography Services"
          >
            Order Now
          </button>
        </div>
      </header>
    </>
  );
};

export default MainContext;
