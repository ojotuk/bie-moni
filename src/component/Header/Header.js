import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo-dark.png";
import "../../styles/Navigation.css";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [screenSizeChange, setScreenSizeChange] = useState(window.innerWidth);
  const [expand, setExpand] = useState({ companys: false, services: false });
  let navElement = useRef(null);
  let dropElement1 = useRef(null);
  let dropElement2 = useRef(null);

  window.addEventListener("resize", (e) => {
    // console.log("resize", window.innerWidth);
    return setScreenSizeChange(window.innerWidth);
  });

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
      navElement.current.classList.add("large-screen-navigation");
    }
    if (screenSizeChange < 992) {
      navElement.current.classList.remove("large-screen-navigation");
      navElement.current.classList.add("mobile-navigation");
    }
  }, [screenSizeChange]);

  const handleToggle = () => {
    setOpen(!open);
  };
  const expandHandler = (element) => {
    if (element === "companys") {
      dropElement1.current.classList.toggle("expand-companys");
      setExpand({ ...expand, companys: !expand.companys });
    }
    if (element === "services") {
      dropElement2.current.classList.toggle("expand-services");
      setExpand({ ...expand, services: !expand.services });
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          {/* nav top */}
          <div className={"topBar"}>
            <div className={"topWrapper"}>
              <div className={"topLeft"}>
                <ul className={"ulTopLeft"}>
                  <li className={"ulTopLeftItem"}>
                    <i className="fa fa-phone"></i>
                    <a href="tel:+2345958509">+2345678987</a>
                  </li>
                  <li className={"ulTopLeftItem"}>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@example">info@bie-moni.com</a>
                  </li>
                  <li className={"ulTopLeftItem"}>
                    <i className="fa fa-clock-o"></i>
                    <a href="/">Open Hours 09:00 am - 06:00 pm</a>
                  </li>
                </ul>
              </div>
              <div className={"topRight"}>
                <ul className={"ulTopRight"}>
                  <li className={"ulTopRightItem"}>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className={"ulTopLeftItem"}></li>
                  <li className={"ulTopRightItem"}>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className={"ulTopRightItem"}>
                    <a href="/">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li className={"ulTopRightItem"}>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className={"ulTopRightItem"}>
                    <a href="/">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* top right ends */}
            </div>
          </div>
          {/* nav bottom */}
          <div className={"bottomBar"}>
            <div className={"wrapper  container"}>
              <a className={"brand navbar-brand"} href="/">
                <img src={logo} className="logo-dark" alt="logo" />
              </a>
              <span className={"navToggler"} onClick={handleToggle}>
                <i className="fa fa-bars "></i>
              </span>
              {/* <span className={styles.navTogglerClose}>
                <i className="fa fa-times "></i>
              </span> */}
              <ul
                className={"large-screen-navigation container"}
                ref={navElement}
              >
                <li className={"mainNavLink"}>
                  <NavLink to="#">Home</NavLink>
                </li>
                <li
                  className={"mainNavLink"}
                  ref={dropElement1}
                  onClick={() => expandHandler("companys")}
                >
                  <a href="/">
                    Companys<i className="fa fa-chevron-down"></i>
                    <i
                      className={
                        expand.companys
                          ? "fa fa-minus d-lg-none"
                          : "fa fa-plus d-lg-none"
                      }
                    ></i>
                  </a>
                  {/* dropdown */}
                  <ul className={"dropDown"}>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">About</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Core values</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Managing Team</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Pricing &amp; Plans</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Help &amps; FAQ</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Career</NavLink>
                    </li>
                  </ul>
                </li>
                <li
                  className={"mainNavLink"}
                  ref={dropElement2}
                  onClick={() => expandHandler("services")}
                >
                  <a href="/">
                    Services<i className="fa fa-chevron-down"></i>
                    <i
                      className={
                        expand.services
                          ? "fa fa-minus d-lg-none"
                          : "fa fa-plus d-lg-none"
                      }
                    ></i>
                  </a>
                  {/* dropdown */}
                  <ul className={"dropDown"}>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Electrification</NavLink>
                    </li>
                    <li className={"dropDownItem"}>
                      <i className="fa fa-chevron-right"></i>
                      <NavLink to="#">Civil Construction</NavLink>
                    </li>
                  </ul>
                </li>
                <li className={"mainNavLink"}>
                  <NavLink to="#">
                    Projects<i className="fa fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className={"mainNavLink"}>
                  <NavLink to="#">News</NavLink>
                </li>
                <li className={"mainNavLink"}>
                  <NavLink to="#">Contact Us</NavLink>
                </li>
                <li className={"mainNavLink"}>
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
