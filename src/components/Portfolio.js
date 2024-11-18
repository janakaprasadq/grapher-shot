import React, { useState } from "react";
import "../styles/Portfolio.scss";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import image6 from "../assets/image-6.jpg";
import image7 from "../assets/image-7.jpg";
import image8 from "../assets/image-8.jpg";
import image9 from "../assets/image-9.jpg";
import image10 from "../assets/image-10.jpg";
import image11 from "../assets/image-11.jpg";
import image12 from "../assets/image-12.jpg";

import pencil from "../assets/icons/pencil.png";
import star from "../assets/icons/star.png";
import bulb from "../assets/icons/bulb.png";
import key from "../assets/icons/key.png";
import light from "../assets/icons/light.png";

import Elipse1 from "../assets/testimonialIcons/Ellipse1.png";
import Elipse2 from "../assets/testimonialIcons/Ellipse2.png";
import Elipse3 from "../assets/testimonialIcons/Ellipse3.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showMore, setShowMore] = useState(false); // State to track "See More"

  const portfolioItems = [
    {
      id: 1,
      category: "wedding",
      img: image1,
      alt: "Fashion",
    },
    {
      id: 2,
      category: "wedding",
      img: image2,
      alt: "Fashion",
    },
    {
      id: 3,
      category: "wedding",
      img: image3,
      alt: "Fashion",
    },
    {
      id: 4,
      category: "product",
      img: image4,
      alt: "Product",
    },
    {
      id: 5,
      category: "product",
      img: image5,
      alt: "Product",
    },
    {
      id: 6,
      category: "product",
      img: image6,
      alt: "Product",
    },
    {
      id: 7,
      category: "food",
      img: image7,
      alt: "Food",
    },
    {
      id: 8,
      category: "food",
      img: image8,
      alt: "Food",
    },
    {
      id: 9,
      category: "food",
      img: image9,
      alt: "Food",
    },
    {
      id: 10,
      category: "fashion",
      img: image10,
      alt: "Fashion",
    },

    {
      id: 11,
      category: "fashion",
      img: image11,
      alt: "Fashion",
    },
    {
      id: 12,
      category: "fashion",
      img: image12,
      alt: "Fashion",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jhon Mafuh",
      platform: "Facebook",
      image: Elipse1,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
    {
      id: 2,
      name: "Verda Angel",
      platform: "Instagram",
      image: Elipse2,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
    {
      id: 3,
      name: "Lovia Franciska",
      platform: "Google",
      image: Elipse3,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setShowMore(false); // Reset to default state when changing filters
  };

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Limit number of visible items based on `showMore` state
  const visibleItems = showMore ? filteredItems : filteredItems.slice(0, 6);

  return (
    <>
      <div className="portfolio-container">
        <header>
          <h1>PORTFOLIO</h1>
          <nav>
            <ul className="filter-menu">
              <li
                className={`filter ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => handleFilterClick("all")}
              >
                All
              </li>
              <li
                className={`filter ${
                  activeFilter === "wedding" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("wedding")}
              >
                Wedding
              </li>
              <li
                className={`filter ${
                  activeFilter === "product" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("product")}
              >
                Product
              </li>
              <li
                className={`filter ${activeFilter === "food" ? "active" : ""}`}
                onClick={() => handleFilterClick("food")}
              >
                Food
              </li>
              <li
                className={`filter ${
                  activeFilter === "fashion" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("fashion")}
              >
                Fashion
              </li>
            </ul>
          </nav>
        </header>

        <div className="portfolio-grid">
          {visibleItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>

        {/* "See More" Button */}
        {filteredItems.length > 6 && (
          <div className="see-more" onClick={() => setShowMore(!showMore)}>
            <p>{showMore ? "See Less" : "See More"}</p>
            <span>{showMore ? "↑" : "→"}</span>
          </div>
        )}

        <div className="outer">
          <div className="row-1">
            <div className="inner-items">
              <h1>WHY ME</h1>
              <p style={{ fontSize: "20px", fontFamily: "Lato, sans-serif" }}>
                Tincidunt sagittis mollis nec suspendisse sed felis massa urna
                nec. Urna quisque blandit turpis ultrices arcu ut sed.
              </p>
            </div>
            <div className="inner-items">
              <img src={pencil}></img>
              <p>Agency</p>
              <p className="item-3">
                Sagittis enim nullam pulvinar tellus sit egestas semper.
                Vestibulum sed libero sed at sed nisl sodales phasellus et.
              </p>
            </div>
            <div className="inner-items">
              <img src={bulb}></img>
              <p>Choose Idea</p>
              <p className="item-3">
                Sagittis enim nullam pulvinar tellus sit egestas semper.
                Vestibulum sed libero sed at sed nisl sodales phasellus et.
              </p>
            </div>
          </div>

          <div className="row-2">
            <div className="inner-items">
              <img src={star}></img>
              <p>Satisfaction</p>
              <p className="item-3">
                Sagittis enim nullam pulvinar tellus sit egestas semper.
                Vestibulum sed libero sed at sed nisl sodales phasellus et.
              </p>
            </div>
            <div className="inner-items">
              <img src={key}></img>
              <p>Quality</p>
              <p className="item-3">
                Sagittis enim nullam pulvinar tellus sit egestas semper.
                Vestibulum sed libero sed at sed nisl sodales phasellus et.
              </p>
            </div>
            <div className="inner-items">
              <img src={light}></img>
              <p>Creativity</p>
              <p className="item-3">
                Sagittis enim nullam pulvinar tellus sit egestas semper.
                Vestibulum sed libero sed at sed nisl sodales phasellus et.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="container py-5">
            <h2
              className="text-center mb-5 text-white"
              style={{
                fontFamily: "Cormorant",
                fontWeight: "400px",
                fontSize: "70px",
              }}
            >
              TESTIMONIALS
            </h2>
            <div className="row g-4">
              {testimonials.map((testimonial) => (
                <div className="col-md-4" key={testimonial.id}>
                  <div
                    className="card text-center p-4"
                    style={{
                      backgroundColor: "#223546",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "left",
                    }}
                  >
                    <div
                      className="testi-img-head"
                      style={{
                        borderBottom: "1px solid #a9b3c1",
                        textAlign: "left",
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle mx-auto"
                        style={{ width: "66px", height: "66px" }}
                      />

                      <div className="card-body" style={{ marginLeft: "20px" }}>
                        <h5
                          className="card-title text-white"
                          style={{
                            fontFamily: "Cormorant",
                            fontSize: "24px",
                            fontWeight: "600px",
                            color: "white",
                          }}
                        >
                          {testimonial.name}
                        </h5>
                        <h6
                          className="card-subtitle mb-3"
                          style={{
                            color: "white",
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "15px",
                          }}
                        >
                          {testimonial.platform}
                        </h6>
                      </div>

                      <hr
                        className="divider"
                        style={{ borderTop: "1px solid #a9b3c1" }}
                      />
                    </div>
                    <p
                      className="card-text text-white"
                      style={{
                        paddingTop: "20px",
                        textAlign: "left",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "15px",
                        fontWeight: "300px",
                      }}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
