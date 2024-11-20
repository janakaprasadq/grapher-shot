import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <div class="footer-container">
        <div class="subscribe-section">
          <h1>
            Get more info other
            <br /> discount prices
          </h1>
          <form class="subscribe-form">
            <div className="input-with-button">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                required
              />
              <button type="submit">Submit</button>
            </div>
          </form>
          <p class="terms">
            * By clicking <strong>‘Submit’</strong> button, you agree to our
            Terms and that you have read our &nbsp;
            <a>
              <b>Data Use Policy</b>
            </a>
            .
          </p>
        </div>

        <div class="footer-background">
          <div class="footer-layer dark"></div>
          <div class="footer-layer light"></div>
        </div>

        <div class="footer-bottom">
          <div class="branding">
            <h3>GRAPHER SHOT.</h3>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-google"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <p>(C) Copyright 2022 | Photographer</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
