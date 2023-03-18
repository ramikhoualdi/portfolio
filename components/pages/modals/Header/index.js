import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.heading} data-scroll-section>
      <div
        className={styles.subheading}
        data-scroll
        data-scroll-delay="0.02"
        data-scroll-speed="2"
        data-scroll-call="dynamicColor"
        data-scroll-repeat
      >
        <p
          className={styles.slideup}
          data-scroll
          data-scroll-delay="0.06"
          data-scroll-speed="6"
          data-scroll-call="dynamicColor"
          data-scroll-repeat
        >
          <span
            className={styles.title1}
            data-scroll
            data-scroll-speed="6"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            Ramy Khoualdi
          </span>
        </p>
      </div>
      <div
        className={styles.subheading}
        data-scroll
        data-scroll-delay="0.04"
        data-scroll-speed="2"
        data-scroll-repeat
      >
        <p className={styles.slideup2}>
          <span
            className={styles.title2}
            data-scroll
            data-scroll-speed="6"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            Full Stack Reactjs and React Native Developer
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
