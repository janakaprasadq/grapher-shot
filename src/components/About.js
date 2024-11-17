import "../styles/About.scss";
import bird from "../assets/bird.jpg";
import fox from "../assets/fox.jpg";
import jiraff from "../assets/jiraff.jpg";
import monkey from "../assets/monkey.jpg";
import parrot from "../assets/parrot.jpg";
import tiger from "../assets/tiger.jpg";
import ImageSlider from "./ImageSlider";

const About = () => {
  const images = [fox, bird, jiraff, monkey, parrot, tiger];
  return (
    <>
      <div className="container-fluid outer">
        <div className="top-outer">
          <h1>
            ABOUT <br />
            US
          </h1>

          <p>
            Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec.
            Urna quisque blandit turpis ultrices arcu ut sed. Ultricies diam est
            aliquet porta fermentum molestie morbi libero. Ultrices sit in elit
            eget nullam sem. Urna velit imperdiet habitant in.
          </p>
        </div>

        <div className="bottom-outer">
          <div className="item-1">
            <h2>+10 Years</h2>
            <p>Experience</p>
          </div>
          <div className="item-2">
            <h2>+450</h2>
            <p>Customers</p>
          </div>
          <div className="item-3">
            <h2>+15K</h2>
            <p>Portfolio Photos</p>
          </div>
        </div>

        <div className="App">
          <ImageSlider images={images} />
        </div>
      </div>
    </>
  );
};

export default About;
