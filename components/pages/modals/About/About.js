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
      <text className={styles.aboutText2} data-scroll>
        Front-end developer who cares deeply about user experience. Serious
        passion for UI design and new technologies.
      </text>
    </div>
  );
};
export default About;
