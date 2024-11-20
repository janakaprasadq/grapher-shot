import "../styles/MainContext.scss";
import heroimg from "../assets/noah2.png";

const MainContext = () => {
  return (
    <>
      <header className="hero-section">
        <img className="heroimg" src={heroimg}></img>
        <div className="color-layers">
          <div className="color-layer-1"></div> {/* First background layer */}
          <div className="color-layer-2"></div>
          {/* Second background layer */}
        </div>
        <div className="container text-center text-md-start">
          <h1 className="display-1">
            PHOTO
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GRAPHY
          </h1>
          <p className="mt-4">
            Pellentesque Mauris A Lobortis In <br />
            Bibendum Sed Lobortis Semper. <br />
            Eget Eu Vel Eu Vitae.
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
