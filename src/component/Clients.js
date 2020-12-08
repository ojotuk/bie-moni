import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Services.module.css";

import bonny_lga from "../img/bonny_lga.png";
import river_state from "../img/river_state.jpg";
import saipem_logo from "../img/saipem_logo.png";
// import { useRef } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    //slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const descriptionSlide = [
  {
    img: saipem_logo,
    id: 1,
  },
  {
    img: bonny_lga,
    id: 2,
  },
  {
    img: saipem_logo,
    id: 3,
  },
  {
    img: river_state,
    id: 4,
  },
  {
    img: bonny_lga,
    id: 5,
  },
];

const Clients = (props) => {
  return (
    <>
      <div className={styles.wrapperServices + ""}>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          // afterChange={() => setSlide(!slider)}
          // focusOnSelect={false}
        >
          {descriptionSlide.map((slide, index) => (
            <div className="d-flex justify-content-center">
              <img
                src={slide.img}
                alt=""
                style={{ width: "100px", backgroundColor: "#0000000" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Clients;
