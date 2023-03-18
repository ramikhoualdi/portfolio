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
        As a skilled Full-Stack Developer specializing in Reactjs and React
        Native, I have a proven track record of crafting exceptional web and
        mobile apps with top-notch user experience and responsive design.
      </text>
    </div>
  );
};
export default About;
