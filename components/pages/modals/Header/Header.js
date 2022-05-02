import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.heading} data-scroll-section>
      <div className={styles.subheading}>
        <p className={styles.slideup}>
          <span
            className={styles.title1}
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            Ramy Khoualdi
          </span>
        </p>
      </div>
      <div className={styles.subheading}>
        <p className={styles.slideup2}>
          <span
            className={styles.title2}
            data-scroll
            data-scroll-speed="6"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            Front-end Developer & UI/UX Designer
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
