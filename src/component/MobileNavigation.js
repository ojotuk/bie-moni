import userEvent from "@testing-library/user-event";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/MobileNav.module.css";
const MobileNavigation = () => {
  let navElement = useRef(null);
  let dropElement1 = useRef(null);
  let dropElement2 = useRef(null);
  const [expand, setExpand] = useState({ companys: false, services: false });

  const expandHandler = () => {};
  return (
    <div className={styles.mobileNav}>
      <ul className={styles.ul + " container"} ref={navElement}>
        <li className={styles.navLink}>
          <NavLink to="#">Home</NavLink>
        </li>
        <li
          className={styles.navLink}
          ref={dropElement1}
          onClick={() => expandHandler("companys")}
        >
          <span>
            Companys
            <i
              className={
                expand.companys
                  ? "fa fa-minus d-lg-none"
                  : "fa fa-plus d-lg-none"
              }
            ></i>
          </span>
          {/* dropdown */}
          <ul className={styles.dropDown}>
            <li className={styles.dropDownItem}>
              <i className="fa fa-chevron-right"></i>
              <NavLink to="/#about">About</NavLink>
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
              <NavLink to="#">Help &amp; FAQ</NavLink>
            </li>
            <li className={styles.dropDownItem}>
              <i className="fa fa-chevron-right"></i>
              <NavLink to="#">Career</NavLink>
            </li>
          </ul>
        </li>
        <li
          className={styles.navLink}
          ref={dropElement2}
          onClick={() => expandHandler("services")}
        >
          <span>
            Services<i className="fa fa-chevron-down"></i>
            <i
              className={
                expand.services
                  ? "fa fa-minus d-lg-none"
                  : "fa fa-plus d-lg-none"
              }
            ></i>
          </span>
          {/* dropdown */}
          <ul className={styles.dorpDown}>
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
        <li className={styles.navLink}>
          <NavLink to="#">
            Projects<i className="fa fa-chevron-down"></i>
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="#">News</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="#">Contact Us</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="#"></NavLink>
          <i className="fa fa-search"></i>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
