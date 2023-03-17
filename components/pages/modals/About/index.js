import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer} data-scroll-section>
      <text
        className={styles.aboutText1}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-6"
      >
        About me
      </text>
      <text className={styles.aboutText2}>
        Full-Stack React/React Native Developer, I have a proven track record of
        delivering user-friendly UI/UX and enhancing user engagement,
        monetization, and app popularity.
      </text>
    </div>
  );
};
export default About;
