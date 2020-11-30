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
import road_construction from "../img/road_construction.jpg";
import landscaping_design from "../img/landscaping_design.jpg";
import Structural_Design from "../img/Structural_Design.png";
import transformer from "../img/transformer.jpg";
import powerlines from "../img/powerlines.jpg";
import elect_supplies from "../img/elect_supplies.jpg";
import welding from "../img/welding.jpg";
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
    img: road_construction,
    icon: icon_1,
    id: 1,
  },
  {
    paragraph:
      "Our design professionals are equipped to help determine the design that work best for our customers within the colours.",
    link: "/",
    type: "Landscape Designs",
    img: landscaping_design,
    icon: icon_2,
    id: 2,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Structural Works",
    img: Structural_Design,
    icon: icon_3,
    id: 3,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Building Construction",
    img: service_1,
    icon: icon_4,
    id: 4,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Boreholes & Water Installation",
    img: borehole,
    icon: icon_4,
    id: 5,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Transformer Installations",
    img: transformer,
    icon: icon_4,
    id: 6,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Power Line Installation",
    img: powerlines,
    icon: icon_4,
    id: 7,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Electrical Supplies & Installation",
    img: elect_supplies,
    icon: icon_4,
    id: 8,
  },
  {
    paragraph:
      "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.",
    link: "/",
    type: "Welding equipment/materials",
    img: welding,
    icon: icon_4,
    id: 9,
  },
];

const ReadMore = ({ paragraph }) => {
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
                  <img src={slide.icon} className={styles.icon} alt="" />
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
