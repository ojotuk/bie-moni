import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import about1 from "../img/about_1.jpg";
import overlap1 from "../img/img_overlap.jpg";
import pattern from "../img/pattern.webp";
import Services from "./Services";
import Footer from "./Footer";
const Landing = () => {
  return (
    <section className="main">
      <section className="header-section">
        <Header />
      </section>
      <Hero />
      {/* abouts us starts */}
      <section className={styles.aboutUsSection}>
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
              <img
                className={styles.overlap1}
                src={overlap1}
                alt=" about bie-moni"
              />
            </div>
            <div className={styles.containerRight + " col-lg-6 right"}>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <h2>
                    <span>Bie-Moni</span> Nigeria Limited
                  </h2>
                  <p>
                    Our company has many years experience and specializes in
                    satisfying client requirements for responsive quality civil
                    engineering works, electrifications and provision of general
                    contracting within the oil and gas industry and
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
            </div>
          </div>
        </div>
      </section>
      {/* services section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.caption}>
            <h4>Our Services</h4>
            <h3>
              High Quality Electrical and Civil Construction Solutions For
              Residentials & Industries!
            </h3>
            <div>Whats Our Offers</div>
            <span></span>
          </div>
          <Services />
        </div>
      </section>
      {/* service section ends */}
      <section className={styles.intersection}>
        <div className={styles.container + " container"}>
          <span>LOOKING AN ADEQUATE SOLUTION FOR YOUR PROJECT?</span>
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
