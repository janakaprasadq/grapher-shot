// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/Price.scss";

const Price = () => {
  const cardData = [
    {
      title: "STANDARD",
      price: "400$",
      duration: "3 hours",
      photos: "60 - 80",
      retouching: "25 items",
      finishing: "10 days",
    },
    {
      title: "PREMIUM",
      price: "550$",
      duration: "4 hours",
      photos: "85 - 90",
      retouching: "40 items",
      finishing: "7 days",
    },
    {
      title: "PRO",
      price: "600$",
      duration: "6 hour",
      photos: "unlimited",
      retouching: "unlimited",
      finishing: "3 days",
    },
  ];
  return (
    <>
      <h1 className="price-title"> PRICELIST</h1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides={true} // Centers the active slide
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          1200: {
            slidesPerView: 3, // For screens >= 1200px
          },
          768: {
            slidesPerView: 2, // For screens >= 768px
          },
          576: {
            slidesPerView: 1, // For screens >= 576px
          },
          0: {
            slidesPerView: 1, // For screens < 576px
          },
        }}
        style={{ padding: "80px" }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <h3 className="title">{card.title}</h3>
              <h1 className="price">{card.price}</h1>

              <div className="detail">
                <p>Duration</p>
                <p> {card.duration}</p>
              </div>
              <div className="detail">
                <p>Lots of photos</p>
                <p>{card.photos}</p>
              </div>
              <div className="detail">
                <p>Detailed Retouching</p>
                <p>{card.retouching}</p>
              </div>
              <div className="detail">
                <p>Finishing </p>
                <p> {card.finishing}</p>
              </div>

              <button className="button">Photo Session Schedule</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Price;
