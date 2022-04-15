import React from "react";

const Portfolio = (props) => {
  const { styles, scroll } = props;

  return (
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
              Frontend Developer
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
