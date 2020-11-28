import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";
import { mouseHover } from "./Animate";
import service_1 from "../img/service1.jpg";
import service_2 from "../img/services2.jpg";
import service_3 from "../img/services3.jpg";
//
import icon_3 from "../img/icon_service_3.png";
import icon_2 from "../img/icon_service_2.png";
import icon_1 from "../img/icon_service_1.png";
import icon_4 from "../img/icon_service_4.png";
import { useRef } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
    img: service_1,
    icon: icon_1,
    id: 1,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Road Construction",
    img: service_2,
    icon: icon_2,
    id: 2,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Road Construction",
    img: service_1,
    icon: icon_3,
    id: 3,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Road Construction",
    img: service_3,
    icon: icon_4,
    id: 4,
  },
];

const ReadMore = ({ paragraph, state }) => {
  let elem = useRef(null);
  useEffect(() => {
    mouseHover(elem);
  }, []);
  return (
    <div className={styles.cardUpDrop} ref={(el) => (elem = el)}>
      <p>{paragraph}</p>
      <Link to="/">
        Read more <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
};
const Hero = (props) => {
  const [over, setOver] = useState(null);
  const mouseHandle = (id) => {
    // alert(id);
    setOver(id);
  };
  return (
    <>
      <div className={styles.wrapperServices + ""}>
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
          // afterChange={() => setSlide(!slider)}
        >
          {descriptionSlide.map((slide, index) => (
            <div
              className={styles.cardWrapper + ""}
              key={index}
              onMouseEnter={() => mouseHandle(index)}
              onMouseLeave={() => setOver(null)}
            >
              <div className={styles.cardUp + " card-up"}>
                {over === index ? (
                  <ReadMore paragraph={slide.paragraph} state={index} />
                ) : (
                  " "
                )}
                <img className={styles.img} src={slide.img} alt="" />
              </div>
              <div className={styles.ctaDiv}>
                <div className={styles.iconDiv}>
                  <img src={slide.icon} className={styles.icon} />
                </div>
                <p className={styles.cardDownText}>{slide.type}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
