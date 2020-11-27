import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Slide.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  textIntro,
  scaleBg,
  topLeftBox,
  fromRight,
  bottomRightBox,
} from "./Animate";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    //slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    name: styles.slide_1,
    caption: "Bigger,Better, Faster & Easier",
    id: 1,
  },
  {
    paragraph:
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    name: styles.slide_2,
    caption: "Project Management & Industrial Solution",
    id: 2,
  },
];

const Hero = (props) => {
  const [slider, setSlide] = useState(false);
  return (
    <>
      <Carousel
        swipeable={false}
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        afterChange={() => setSlide(!slider)}
      >
        {descriptionSlide.map((slide) => (
          <div className={"a"} key={slide.id}>
            content
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Hero;
