import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Slide.module.css";
import { useRef } from "react";
import {
  textIntro,
  scaleBg,
  topLeftBox,
  fromRight,
  bottomRightBox,
} from "./Animate";
// import slide01 from "../img/slider-3.jpg";
import slide01 from "../img/slidebg_3.jpg";
// import slide02 from "../img/02.jpg";
import slide02 from "../img/slidebg_4.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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
      "Providing High Quality Electrical & Civil Construction Services",
    link: "/",
    name: styles.slide_1,
    caption: "Nig Ltd",
    span: "Bie-Moni",
    id: 1,
  },
  {
    paragraph: "We Provide Experience and High Level worksolution for you.",
    link: "/",
    name: styles.slide_2,
    caption: "Nig Ltd",
    span: "Bie-Moni",
    id: 2,
  },
  // {
  //   paragraph: "We are professional for your dream project",
  //   link: "/",
  //   name: styles.slide_1,
  //   caption: "Nig Ltd",
  //   span: "Bie-Moni",
  //   id: 3,
  // },
  // {
  //   paragraph:
  //     "Technology to take products from  an idea all the way to the end consumer.",
  //   link: "/",
  //   name: styles.slide_2,
  //   caption: "Driven",
  //   span: "Technology",
  //   id: 4,
  // },
];

const ContentOne = ({ slide }) => {
  let h2 = useRef(null);
  let p = useRef(null);
  let topLeft = useRef(null);
  let bottomRight = useRef(null);
  useEffect(() => {
    // textIntro(h2);
    textIntro(h2);
    fromRight(p);
    topLeftBox(topLeft);
    bottomRightBox(bottomRight);
  }, [slide]);
  return (
    <div className={styles.slideDescription}>
      <div className={styles.content + " container"}>
        <div className={styles.wrapper}>
          <h2 ref={(el) => (h2 = el)}>
            <span>{descriptionSlide[0].span}</span>{" "}
            {descriptionSlide[0].caption}
          </h2>
          <p ref={(el) => (p = el)}>{descriptionSlide[0].paragraph}</p>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaWrapper1}>
              <a className={styles.aboutUsBtn} href="/#about">
                About Us
              </a>
              <span className={styles.colorSlide}></span>
            </div>
            <div className={styles.ctaWrapper2}>
              <a className={styles.aboutUsBtn} href="/#services">
                Our Services
              </a>
              <span className={styles.colorSlide}></span>
            </div>
          </div>
          <div
            className={styles.wrapperBoxTopLeft}
            ref={(el) => (topLeft = el)}
          ></div>
          <div
            className={styles.wrapperBoxBottomRight}
            ref={(el) => (bottomRight = el)}
          ></div>
        </div>
      </div>
    </div>
  );
};
const ContentTwo = ({ slide }) => {
  let h2 = useRef(null);
  let p = useRef(null);
  let topLeft = useRef(null);
  let bottomRight = useRef(null);
  useEffect(() => {
    // textIntro(h2);
    textIntro(h2);
    fromRight(p);
    topLeftBox(topLeft);
    bottomRightBox(bottomRight);
  }, [slide]);
  return (
    <div className={styles.slideDescription2}>
      <div className={styles.content + " container"}>
        <div className={styles.wrapper}>
          <h2 ref={(el) => (h2 = el)}>
            <span>{descriptionSlide[0].span}</span>{" "}
            {descriptionSlide[1].caption}
          </h2>
          <p ref={(el) => (p = el)}>{descriptionSlide[1].paragraph}</p>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaWrapper1}>
              <a className={styles.aboutUsBtn} href="/#about">
                About Us
              </a>
              <span className={styles.colorSlide}></span>
            </div>
            <div className={styles.ctaWrapper2}>
              <a className={styles.aboutUsBtn} href="/#services">
                Our Services
              </a>
              <span className={styles.colorSlide}></span>
            </div>
          </div>
          <div
            className={styles.wrapperBoxTopLeft}
            ref={(el) => (topLeft = el)}
          ></div>
          <div
            className={styles.wrapperBoxBottomRight}
            ref={(el) => (bottomRight = el)}
          ></div>
        </div>
      </div>
    </div>
  );
};
// background Images
const SlideBg01 = () => {
  let el = useRef(null);
  useEffect(() => {
    scaleBg(el);
  });
  return <img src={slide01} ref={(element) => (el = element)} alt="civil" />;
};
const SlideBg02 = () => {
  let el = useRef(null);
  useEffect(() => {
    scaleBg(el);
  });
  return <img src={slide02} ref={(element) => (el = element)} alt="civil" />;
};

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
          <div className={slide.name} key={slide.id}>
            {slider ? <ContentOne slide={slider} /> : <ContentTwo />}
          </div>
        ))}
      </Carousel>
      <div className="extra-div">{slider ? <SlideBg01 /> : <SlideBg02 />}</div>
    </>
  );
};

export default Hero;
