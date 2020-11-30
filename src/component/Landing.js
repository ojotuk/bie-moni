import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import about1 from "../img/about_1.jpg";
import overlap1 from "../img/img_overlap.jpg";
import pattern from "../img/pattern.webp";
import powerlines from "../img/powerlines.svg";
import road from "../img/road.png";
import Services from "./Services";
import Footer from "./Footer";
import { Fade, Slide, Zoom } from "react-reveal";

const Landing = () => {
  return (
    <section className="main">
      <section className="header-section">
        <Header />
      </section>
      <Hero />
      {/* abouts us starts */}
      <section className={styles.aboutUsSection} id="about">
        <div className={styles.patternDiv}>
          <img src={pattern} alt="pattern" />
        </div>
        <div className={styles.container + " container"}>
          <div className={styles.row + " row"}>
            <div className={styles.containerLeft + " col-lg-6 left"}>
              <img
                className={styles.nonOverlap}
                src={about1}
                alt="about bie-moni"
              />
              <h2>About Us</h2>
              <Slide bottom>
                <img
                  className={styles.overlap1}
                  src={overlap1}
                  alt=" about bie-moni"
                />
              </Slide>
              <img
                src={powerlines}
                alt="powerlines"
                className={styles.powerlines}
              />
              <img src={road} alt="powerlines" className={styles.road} />
            </div>
            <div className={styles.containerRight + " col-lg-6 right"}>
              <Zoom right>
                <div className={styles.wrapper}>
                  <div className={styles.content}>
                    <h2>
                      <span>Bie-Moni</span> Nigeria Limited
                    </h2>
                    <p>
                      Our company has many years experience and specializes in
                      satisfying client requirements for responsive quality
                      civil engineering works, electrifications and provision of
                      general contracting within the oil and gas industry and
                      public/private sector of the economy.
                    </p>
                    <p className="mt-0">
                      With state of the art equipment and support facilities,
                      we've executed several project across the country.
                    </p>
                    <div className={styles.ctaWrapper}>
                      <div className={styles.cta}>
                        <Link to="#">Learn More</Link>
                      </div>
                      <span></span>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      {/* core value */}
      <section className={styles.coresSection} id="cores">
        <div className={styles.container + " container"}>
          <h4>Core Values</h4>
          <h3>
            Our customers’ projects are an investment in the{" "}
            <span>future...</span>
          </h3>
          <div className={styles.valueWrapper}>
            <Fade down>
              <div>Safety</div>
            </Fade>
            <Fade up>
              <div>Quality</div>
            </Fade>
            <Fade down>
              <div>Sustainability</div>
            </Fade>
          </div>
        </div>
      </section>
      {/* services section */}
      <section className={styles.servicesSection}>
        <div className="container" id="services">
          <div className={styles.caption}>
            <h4>Our Services</h4>
            <h3>
              We Provide High Quality Electrical and Civil Construction
              Solutions For Residentials & Industries!
            </h3>
            <div>Whats Our Offers</div>
            <span></span>
          </div>
          <Services />
          <Fade left>
            <div className={styles.listDi + " mt-4"}>
              <ul className="row text-black">
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Road Construction
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Landscape Designs
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Structural Works
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Building Construction
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Borehole Drilling &amp; Water
                  Installation
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Transformer Installation
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Power Line Installation
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>General Electrical Supplies
                  &amp; Installation
                </li>
                <li className="col-lg-4">
                  <i className="fa fa-check"></i>Supplies of Welding
                  Equipment/Materials (consumables)
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>
      {/* service section ends */}
      <section className={styles.intersection}>
        <div className={styles.container + " container"}>
          <span>LOOKING FOR AN ADEQUATE SOLUTION FOR YOUR PROJECT ?</span>
          <div className={styles.ctaWrapper}>
            <div>
              Reach Out <i className="fa fa-comment ml-2"></i>
            </div>
            <span></span>
          </div>
        </div>
      </section>
      {/* INBEtween */}
      <section className={styles.featured}></section>
      {/* FOOTER */}
      <section className={styles.footerSection}>
        <Footer />
      </section>
    </section>
  );
};

export default Landing;
