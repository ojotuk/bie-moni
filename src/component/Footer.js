import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Map from "./Map";
const Footer = () => {
  const today = new Date();
  return (
    <div className={styles.footerMain}>
      <div className={styles.container + " container"} id="contact">
        <div className={styles.wrapper + " "}>
          <Fade left>
            <div className={styles.subscribe + " col-lg-3 col-md-6"}>
              <div className={styles.content}>
                <div className={styles.translateWrapper}>
                  <i className="fa fa-envelope"></i>
                  <span>Sign Up for News Alert and Publications</span>
                </div>
                <input type="email" placeholder="email" required />
                <div className={styles.ctaWrapper}>
                  <span>Subscribe</span>
                  <div className={styles.slider}></div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className={styles.aboutUs + " col-lg-3 col-md-6"}>
              <h6>
                <span>Bie-Moni</span> Nig Ltd
              </h6>
              <p>
                A leading developer of A-grade commercial, industrial and
                residential projects in USA. Since its foundation the company
                has doubled its turnover year on year with its staff.
              </p>
            </div>
          </Fade>
          <Fade up>
            <div className={styles.quickLinks + " col-lg-3 col-md-6"}>
              <h6>Quick links</h6>
              <ul>
                <li>
                  <Link to="#">HSE policy</Link>
                </li>
                <li>
                  <Link to="#">Quality Assurance/Control Policy</Link>
                </li>
                <li>
                  <Link to="#">CASHES Policy</Link>
                </li>
                <li>
                  <Link to="#">Security Policy</Link>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade up>
            <div className={styles.address + " col-lg-3 col-md-6"}>
              <h6>Quick Contact</h6>
              <div>
                <p>
                  <span>Head Office:</span> Plot 1 Ajayi close, off I T Wiliiam
                  street Akiama Junction, Bonny, Rivers State. 11226 United
                  States, Nigeria.
                </p>
                <p>
                  <span>Branch Office:</span> Plot 10A Peter Odili Road,
                  Trans-Amadi, Port Harcourt, River State, Nigeria.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Map />
      <div className={styles.copyright}>
        Copyrights {today.getFullYear()}.
        <span>
          <a href="https://cloud10.com.ng">Cloud10 Tech Hub</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
