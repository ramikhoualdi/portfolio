import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const AppPreview1 = (props) => {
  const { styles } = props;
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={styles.app1Contaniner} data-scroll-container>
      <section className={styles.sectionLeft} data-scroll-section>
        <div className={styles.app1Section1}>01</div>
        <div className={styles.app1Section2}>
          <div className={styles.app2SectionSub}>
            <div className={styles.app1name}>Ertnashville</div>
            <div className={styles.app1position}>
              Full Stack Developer • UI Designer
            </div>
            <div className={styles.app1position2}>React native • Firebase</div>
            <div className={styles.app1Description}>
              Mobile project to give insights about property like contacts,
              files, access and photos.
            </div>
          </div>
        </div>
        <div className={styles.app1Section3}>ios & android app</div>
      </section>
      <section className={styles.sectionRight} data-scroll data-scroll-section>
        <div className={styles.imageContainer} data-scroll data-scroll-section>
          <div data-scroll data-scroll-speed="1">
            <img
              src="/images/ertnashville/s11.png"
              alt="ertnashville1"
              className={styles.imgStyle1}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="2">
            <img
              src="/images/ertnashville/s1.png"
              alt="ertnashville2"
              className={styles.imgStyle2}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="4">
            <img
              src="/images/ertnashville/s10.png"
              alt="ertnashville3"
              className={styles.imgStyle3}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="3">
            <img
              src="/images/ertnashville/s7.png"
              alt="ertnashville4"
              className={styles.imgStyle5}
              data-scroll
            />
          </div>
          <div data-scroll data-scroll-speed="2">
            <img
              src="/images/ertnashville/s5.png"
              alt="ertnashville5"
              className={styles.imgStyle4}
              data-scroll
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPreview1;
