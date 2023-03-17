import React from "react";
import Cube from "../Cube";
import styles from "./AppPreview.module.css";

const AppPreview = (props) => {
  const { item } = props;
  return (
    <section
      className={styles.app1Contaniner}
      data-scroll-section
      id={`app-${item.imagesFolder}`}
    >
      <div
        className={styles.sectionLeft}
        data-scroll
        data-scroll-sticky
        data-scroll-target={`#app-${item.imagesFolder}`}
        data-scroll-repeat
      >
        <Cube nb={item.nb} />
        <div className={styles.app1Section2}>
          <div className={styles.app2SectionSub}>
            <div className={styles.app1name}>{item.name}</div>
            <div className={styles.app1position}>{item.position}</div>
            <div className={styles.app1position2}>{item.tech}</div>
            <div className={styles.app1Description}>{item.desc}</div>
          </div>
        </div>
        <div className={styles.app1Section3}>{item.platform}</div>
      </div>
      <div className={styles.sectionRight}>
        <div
          className={styles.imageContainer}
          data-scroll
          data-scroll-speed="2"
          data-scroll-offset="40%"
        >
          <div data-scroll data-scroll-speed="1" data-scroll-repeat>
            <img
              src={`/images/${item.imagesFolder}/s1.png`}
              alt={`${item.imagesFolder}1`}
              className={styles.imgStyle1}
            />
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-repeat>
            <img
              src={`/images/${item.imagesFolder}/s2.png`}
              alt={`${item.imagesFolder}2`}
              className={styles.imgStyle2}
            />
          </div>
          <div data-scroll data-scroll-speed="4" data-scroll-repeat>
            <img
              src={`/images/${item.imagesFolder}/s3.png`}
              alt={`${item.imagesFolder}3`}
              className={styles.imgStyle3}
            />
          </div>
          <div data-scroll data-scroll-speed="1" data-scroll-repeat>
            <img
              src={`/images/${item.imagesFolder}/s4.png`}
              alt={`${item.imagesFolder}4`}
              className={styles.imgStyle4}
            />
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-repeat>
            <img
              src={`/images/${item.imagesFolder}/s5.png`}
              alt={`${item.imagesFolder}5`}
              className={styles.imgStyle5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
