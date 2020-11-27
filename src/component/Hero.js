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
import slide01 from "../img/slider-3.jpg";
import slide02 from "../img/02.jpg";

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
          <h2 ref={(el) => (h2 = el)}>{descriptionSlide[0].caption}</h2>
          <p ref={(el) => (p = el)}>{descriptionSlide[0].paragraph}</p>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaWrapper1}>
              <Link href={descriptionSlide[0].link}>
                <a className={styles.aboutUsBtn} href="/">
                  About Us
                </a>
                <span className={styles.colorSlide}></span>
              </Link>
            </div>
            <div className={styles.ctaWrapper2}>
              <Link href={descriptionSlide[0].link}>
                <a className={styles.aboutUsBtn} href="/">
                  Our Services
                </a>
                <span className={styles.colorSlide}></span>
              </Link>
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
          <h2 ref={(el) => (h2 = el)}>{descriptionSlide[1].caption}</h2>
          <p ref={(el) => (p = el)}>{descriptionSlide[1].paragraph}</p>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaWrapper1}>
              <Link href={descriptionSlide[1].link}>
                <a className={styles.aboutUsBtn} href="/">
                  About Us
                </a>
                <span className={styles.colorSlide}></span>
              </Link>
            </div>
            <div className={styles.ctaWrapper2}>
              <Link href={descriptionSlide[1].link}>
                <a className={styles.aboutUsBtn} href="/">
                  Our Services
                </a>
                <span className={styles.colorSlide}></span>
              </Link>
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
