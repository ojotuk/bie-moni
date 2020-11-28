import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  const today = new Date();
  return (
    <div className={styles.footerMain}>
      <div className={styles.container + " container"}>FOOTER</div>
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
