import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styles from './AppPreview.module.css'

const AppPreview2 = () => {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={styles.app1Contaniner} data-scroll-container>
      <section className={styles.sectionLeft} data-scroll-section>
        <div className={styles.app1Section1}>02</div>
        <div className={styles.app1Section2}>
          <div className={styles.app2SectionSub}>
            <div className={styles.app1name}>Medipocket World</div>
            <div className={styles.app1position}>
              Front-end Developer • UI Designer
            </div>
            <div className={styles.app1position2}>
              React native • Django • graphql
            </div>
            <div className={styles.app1Description}>
              Healthcare service provider contain online consultation and an AI
              symptom checker.
            </div>
          </div>
        </div>
        <div className={styles.app1Section3}>ios & android app</div>
      </section>
      <section className={styles.sectionRight} data-scroll data-scroll-section>
        <div className={styles.imageContainer2} data-scroll data-scroll-section>
          <div data-scroll data-scroll-speed="1">
            <img
              src="/images/medipocket/s3.png"
              alt="ertnashville1"
              className={styles.img2Style1}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="2">
            <img
              src="/images/medipocket/s1.png"
              alt="ertnashville2"
              className={styles.img2Style2}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="4">
            <img
              src="/images/medipocket/s4.png"
              alt="ertnashville3"
              className={styles.img2Style3}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="3">
            <img
              src="/images/medipocket/s12.png"
              alt="ertnashville4"
              className={styles.img2Style5}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="2">
            <img
              src="/images/medipocket/s13.png"
              alt="ertnashville5"
              className={styles.img2Style4}
              data-scroll
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPreview2;
