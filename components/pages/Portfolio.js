import React from "react";
import AppPreview1 from "./modals/AppPreview1";
import AppPreview2 from "./modals/AppPreview2";

const Portfolio = (props) => {
  const { styles, scroll } = props;

  return (
    <main className={styles.main} data-scroll-container>
      {/* Section 1 */}
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
      {/* About me */}
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
      {/* App1 */}
      <div className={styles.cube} data-scroll-section></div>
      <AppPreview1 styles={styles} />
      {/* App2 */}
      <div className={styles.cube} data-scroll-section></div>
      <AppPreview2 styles={styles} />
      {/* App3 */}
      <div className={styles.cube} data-scroll-section></div>
      {/* <AppPreview styles={styles} /> */}
      {/* Skills */}
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
        {/* <text className={styles.aboutText2} data-scroll>
          React js • React Native • Firebase
        </text> */}
      </div>
      {/* Contact */}
      <div className={styles.aboutContainer} data-scroll-section>
        <text
          className={styles.contactContact}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
        >
          Contact
        </text>
        <div className={styles.contacts}>
          <img
            src="/icons/twitter.png"
            alt="twitter"
            className={styles.contactIcon}
          />
          <img
            src="/icons/github.png"
            alt="github"
            className={styles.contactIcon}
          />
          <img
            src="/icons/email.png"
            alt="email"
            className={styles.contactIcon}
          />
          <img
            src="/icons/instagram.png"
            alt="github"
            className={styles.contactIcon}
          />
          <img
            src="/icons/linkedin.png"
            alt="github"
            className={styles.contactIcon}
          />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
