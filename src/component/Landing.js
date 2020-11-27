import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import about1 from "../img/about_1.jpg";
import overlap1 from "../img/img_overlap.jpg";
import pattern from "../img/pattern.webp";
import Services from "./Services";
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
                  <h2>Any Complexity For Any Catt</h2>
                  <p>
                    Our company has many years experience and specializes in
                    manufacturing, salling, serviceing and repairing cardan
                    shafts (cardans) for various vehicles, technological
                    equipment, tractor, special machinery and agricultural
                    machinery of verious domestic and foreign manufacturers.
                  </p>
                  <div className={styles.ctaWrapper}>
                    <div className={styles.cta}>
                      <Link to="#">About Us</Link>
                    </div>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Services />
        </div>
      </section>
    </section>
  );
};

export default Landing;
