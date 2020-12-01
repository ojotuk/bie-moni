import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";
import { mouseHover } from "./Animate";
import service_1 from "../img/service1.jpg";
import borehole from "../img/borehole.jpg";
//
import icon_3 from "../img/icon_service_3.png";
import icon_2 from "../img/icon_service_2.png";
import icon_1 from "../img/icon_service_1.png";
import icon_4 from "../img/icon_service_4.png";

import bonny_lga from "../img/bonny_lga.png";
import { useRef } from "react";

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
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Road Construction",
    img: bonny_lga,
    icon: icon_1,
    id: 1,
  },
  {
    paragraph:
      "Our design professionals are equipped to help determine the design that work best for our customers within the colours.",
    link: "/",
    type: "Landscape Designs",
    img: bonny_lga,
    icon: icon_2,
    id: 2,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Structural Works",
    img: bonny_lga,
    icon: icon_3,
    id: 3,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Building Construction",
    img: bonny_lga,
    icon: icon_4,
    id: 4,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Boreholes & Water Installation",
    img: bonny_lga,
    icon: icon_4,
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
          autoPlaySpeed={10000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          // afterChange={() => setSlide(!slider)}
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
