import React from "react";
import styles from "./Others.module.css";
import Image from "next/image";
import darkmode from "./../../../../public/images/others/darkmode.gif";
import rating from "./../../../../public/images/others/rating.png";
import inapppurchases from "./../../../../public/images/others/in_app_purchases.png";

export default function Others() {
  return (
    <section className={styles.container} data-scroll-section>
      <span className={styles.title1}>Components</span>
      {/* dark Mode */}
      <div className={styles.img1Container}>
        <Image
          src={darkmode}
          width={390}
          height={70}
          className={styles.img1}
          alt="darkmode"
        />
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
      </div>
      {/* In-app Purchases */}
      <div className={styles.img3Container}>
        <Image
          src={inapppurchases}
          width={280}
          height={200}
          className={styles.img3}
          alt="inapppurchases"
        />
      </div>
    </section>
  );
}
