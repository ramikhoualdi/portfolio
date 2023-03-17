import React from "react";
import Cube from "../Cube";
import styles from "./AppPreview.module.css";
import Image from "next/image";

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
          <div
            className={`${styles.imgStyleContainer} ${styles.imgStyleContainer1}`}
            data-scroll
            data-scroll-speed="1"
            data-scroll-repeat
          >
            <Image
              src={item.img1.src}
              alt={`${item.imagesFolder}1`}
              layout="fill"
              className={styles.imgStyle1}
              priority
            />
          </div>
          <div
            className={`${styles.imgStyleContainer} ${styles.imgStyleContainer2}`}
            data-scroll
            data-scroll-speed="2"
            data-scroll-repeat
          >
            <Image
              src={item.img2.src}
              alt={`${item.imagesFolder}2`}
              layout="fill"
              className={styles.imgStyle2}
              priority
            />
          </div>
          <div
            className={`${styles.imgStyleContainer} ${styles.imgStyleContainer3}`}
            data-scroll
            data-scroll-speed="4"
            data-scroll-repeat
          >
            <Image
              src={item.img3.src}
              alt={`${item.imagesFolder}3`}
              layout="fill"
              className={styles.imgStyle3}
              priority
            />
          </div>
          <div
            className={`${styles.imgStyleContainer} ${styles.imgStyleContainer4}`}
            data-scroll
            data-scroll-speed="1"
            data-scroll-repeat
          >
            <Image
              src={item.img4.src}
              alt={`${item.imagesFolder}4`}
              layout="fill"
              className={styles.imgStyle4}
              priority
            />
          </div>
          <div
            className={`${styles.imgStyleContainer} ${styles.imgStyleContainer5}`}
            data-scroll
            data-scroll-speed="2"
            data-scroll-repeat
          >
            <Image
              src={item.img5.src}
              alt={`${item.imagesFolder}5`}
              layout="fill"
              className={styles.imgStyle5}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
