import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import logo from "../../img/logo-dark.png";
import "../../styles/Navigation.css";
const Header = () => {
  const [open, setOpen] = useState(true);
  const [screenSizeChange, setScreenSizeChange] = useState(window.screen.width);
  let navElement = useRef(null);
  const screenSize = window.screen.width;

  window.addEventListener("resize", () =>
    setScreenSizeChange(window.screen.width)
  );

  useEffect(() => {
    // console.log(navElement.current.classList.value);
    navElement.current.classList.toggle("drop-open");
    // console.log(window.screen.width);
  }, [open]);
  //monitor screen width break point
  useEffect(() => {
    if (screenSizeChange >= 992) {
      navElement.current.classList.remove("drop-open");
      navElement.current.classList.remove("mobile-navigation");
      navElement.current.classList.add("Header_ulLeft__2YMeL");
    }
    if (screenSizeChange < 992) {
      navElement.current.classList.remove("Header_ulLeft__2YMeL");
      navElement.current.classList.add("mobile-navigation");
    }
  }, [screenSizeChange]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* nav top */}
          <div className={styles.topBar}>
            <div className={styles.topWrapper}>
              <div className={styles.topLeft}>
                <ul className={styles.ulTopLeft}>
                  <li className={styles.ulTopLeftItem}>
                    <i className="fa fa-phone"></i>
                    <a href="tel:+2345958509">+2345678987</a>
                  </li>
                  <li className={styles.ulTopLeftItem}>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@example">info@bie-moni.com</a>
                  </li>
                  <li className={styles.ulTopLeftItem}>
                    <i className="fa fa-clock-o"></i>
                    <a>Open Hours 09:00 am - 06:00 pm</a>
                  </li>
                </ul>
              </div>
              <div className={styles.topRight}>
                <ul className={styles.ulTopRight}>
                  <li className={styles.ulTopRightItem}>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className={styles.ulTopLeftItem}></li>
                  <li className={styles.ulTopRightItem}>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className={styles.ulTopRightItem}>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li className={styles.ulTopRightItem}>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className={styles.ulTopRightItem}>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* top right ends */}
            </div>
          </div>
          {/* nav bottom */}
          <div className={styles.bottomBar}>
            <div className={styles.wrapper + " container"}>
              <a className={styles.brand + " navbar-brand"} href="#">
                <img src={logo} className="logo-dark" alt="logo" />
              </a>
              <span className={styles.navToggler} onClick={handleToggle}>
                <i className="fa fa-bars "></i>
              </span>
              {/* <span className={styles.navTogglerClose}>
                <i className="fa fa-times "></i>
              </span> */}
              <ul className={styles.ulLeft} ref={navElement}>
                <li className={styles.mainNavLink}>
                  <NavLink to="#">Home</NavLink>
                </li>
                <li className={styles.mainNavLink + " dropDown"}>
                  <NavLink to="#">
                    Companys<i className="fa fa-chevron-down"></i>
                    <i className="fa fa-plus d-lg-none"></i>
                  </NavLink>
                  {/* dropdown */}
                  <ul className={styles.dropDown}>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">About</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Core values</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Managing Team</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Pricing &amp; Plans</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Help &amps; FAQ</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Career</NavLink>
                    </li>
                  </ul>
                </li>
                <li className={styles.mainNavLink}>
                  <NavLink to="#">
                    Services<i className="fa fa-chevron-down"></i>
                    <i className="fa fa-plus d-lg-none"></i>
                  </NavLink>
                  {/* dropdown */}
                  <ul className={styles.dropDown}>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Electrification</NavLink>
                    </li>
                    <li className={styles.dropDownItem}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Civil Construction</NavLink>
                    </li>
                  </ul>
                </li>
                <li className={styles.mainNavLink}>
                  <NavLink to="#">
                    Projects<i className="fa fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className={styles.mainNavLink}>
                  <NavLink to="#">News</NavLink>
                </li>
                <li className={styles.mainNavLink}>
                  <NavLink to="#">Contact Us</NavLink>
                </li>
                <li className={styles.mainNavLink}>
                  <NavLink to="#"></NavLink>
                  <i className="fa fa-search"></i>
                </li>
              </ul>
            </div>
            {/* bottom Bar container ends */}
          </div>
          {/* bottom Bar ends */}
        </nav>
      </header>
    </>
  );
};

export default Header;
