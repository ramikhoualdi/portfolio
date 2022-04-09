import React, { useRef } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <main className={styles.main} data-scroll-section>
        {/* Section 1 */}
        <div className={styles.heading}>
          <div className={styles.subheading}>
            <p className={styles.slideup}>
              <span
                className={styles.title1}
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top"
                data-scroll-delay="0.05"
              >
                Rami Khoualdi
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
                Frontend Developer
              </span>
            </p>
          </div>
        </div>
        {/* Section 2 */}
        {/* <div className={styles.description} id="header" data-scroll-section>
          <p
            className={styles.section2}
            data-scroll-speed="-8"
            data-scroll-position="top"
            data-scroll-target="#section2"
            data-scroll-repeat="true"
          >
            <span
              className={styles.title3}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
              data-scroll-position="top"
              data-scroll-target="#section2"
            >
              About me
            </span>
          </p>
        </div> */}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Portfolio;
