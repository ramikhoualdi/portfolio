import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainerMain} data-scroll-section>
      <text
        className={styles.aboutText3}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="4"
      >
        skills
      </text>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          <span className={styles.skillsText}>React js</span>
          <span className={styles.skillsText}>React Native</span>
          <span className={styles.skillsText}>Redux</span>
          <div className={styles.skillsspace}></div>
          <span className={styles.skillsText}>Responsive Design</span>
          <span className={styles.skillsText}>Cross-platform</span>
          <div className={styles.skillsspace}></div>
        </div>
        <div className={styles.skills}>
          <span className={styles.skillsText}>Firebase</span>
          <span className={styles.skillsText}>Graphql & Apollo Client</span>
          <span className={styles.skillsText}>REST</span>
          <div className={styles.skillsspace}></div>
          <span className={styles.skillsText}>Functional Programming</span>
          <span className={styles.skillsText}>Testing & Debugging</span>
          <div className={styles.skillsspace}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
