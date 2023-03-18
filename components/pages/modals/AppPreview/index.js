import React from "react";
import Cube from "../Cube";
import styles from "./AppPreview.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <div className={styles.app1Section3}>
          {item.ios.isShown ? (
            item.ios.link ? (
              <Link href={item.ios.link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkUnderline}
                >
                  {item.ios.text}
                </a>
              </Link>
            ) : (
              <p>{item.ios.text}</p>
            )
          ) : null}
          {item.android.isShown ? (
            item.android.link ? (
              <>
                <p>&nbsp;•&nbsp;</p>
                <Link href={item.android.link}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkUnderline}
                  >
                    {item.android.text}
                  </a>
                </Link>
              </>
            ) : (
              <p>&nbsp;•&nbsp;{item.android.text}</p>
            )
          ) : null}
          {item.web.isShown ? (
            item.web.link ? (
              <>
                <p>&nbsp;•&nbsp;</p>
                <Link href={item.web.link}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkUnderline}
                  >
                    {item.web.text}
                  </a>
                </Link>
              </>
            ) : (
              <p>&nbsp;•&nbsp;{item.web.text}</p>
            )
          ) : null}
        </div>
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
