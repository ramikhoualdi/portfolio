import React from "react";
import styles from "./Others.module.css";
import Image from "next/image";
import darkmode from "./../../../../public/images/others/darkmode.gif";
import rating from "./../../../../public/images/others/rating.png";
import inapppurchases from "./../../../../public/images/others/in_app_purchases.png";
import languages from "./../../../../public/images/others/languages.png";
import pushnotification from "./../../../../public/images/others/push-notification.png";
import floatingbtn from "./../../../../public/images/others/floating-btn.gif";
import lifeModal from "./../../../../public/images/others/life_modal.png";
import profile from "./../../../../public/images/others/profile.png";
import swipetodelete from "./../../../../public/images/others/swipe_to_delete.gif";

export default function Others() {
  return (
    <section className={styles.container} data-scroll-section>
      <span className={styles.title1}>Components</span>
      <div className={styles.subContainer}>
        {/* dark Mode */}
        <div className={styles.img1Container}>
          <Image
            src={darkmode}
            width={380}
            height={70}
            className={styles.img1}
            alt="darkmode"
          />
          <p className={styles.title2}>Dark Mode</p>
        </div>
        {/* rating */}
        <div className={styles.img2Container}>
          <Image
            src={rating}
            width={280}
            height={400}
            className={styles.img2}
            alt="rating"
          />
          <p className={styles.title2}>Rating</p>
        </div>
        {/* In-app Purchases */}
        <div className={styles.img3Container}>
          <Image
            src={inapppurchases}
            width={280}
            height={180}
            className={styles.img3}
            alt="inapppurchases"
          />
          <p className={styles.title2}>In-app Purchases</p>
        </div>
        {/* Languagaes */}
        <div className={styles.img4Container}>
          <Image
            src={languages}
            width={180}
            height={320}
            className={styles.img4}
            alt="languages"
          />
          <p className={styles.title2}>Languages</p>
        </div>
        {/* In-app Purchases */}
        <div className={styles.img5Container}>
          <Image
            src={pushnotification}
            width={250}
            height={180}
            className={styles.img5}
            alt="pushnotification"
          />
          <p className={styles.title2}>Push Notification</p>
        </div>
        {/* Floating Btn */}
        <div className={styles.img6Container}>
          <Image
            src={floatingbtn}
            width={200}
            height={190}
            className={styles.img6}
            alt="floatingbtn"
          />
          <p className={styles.title2}>Floating Button</p>
        </div>
        {/* Life Modal */}
        <div className={styles.img7Container}>
          <Image
            src={lifeModal}
            width={280}
            height={250}
            className={styles.img7}
            alt="lifeModal"
          />
          <p className={styles.title2}>Floating Button</p>
        </div>
        {/* Profile Header */}
        <div className={styles.img8Container}>
          <Image
            src={profile}
            width={320}
            height={200}
            className={styles.img8}
            alt="profile"
          />
          <p className={styles.title2}>Floating Button</p>
        </div>
        {/* Swipe To Delete */}
        <div className={styles.img9Container}>
          <Image
            src={swipetodelete}
            width={320}
            height={170}
            className={styles.img9}
            alt="swipetodelete"
          />
          <p className={styles.title2}>Swipe To Delete</p>
        </div>
      </div>
    </section>
  );
}
