import React from "react";
import Link from "next/link";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
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
        {/* <Link href="https://twitter.com/Rami86001660"> */}
          <a target="_blank">
            <img
              src="/icons/twitter.png"
              alt="twitter"
              className={styles.contactIcon}
            />
          </a>
        {/* </Link> */}
        <Link href="https://github.com/ramikhoualdi">
          <a target="_blank">
            <img
              src="/icons/github.png"
              alt="github"
              className={styles.contactIcon}
            />
          </a>
        </Link>
        <Link href="mailto:ramykhweldi@gmail.com">
          <a target="_blank">
            <img
              src="/icons/email.png"
              alt="email"
              className={styles.contactIcon}
            />
          </a>
        </Link>
        {/* <Link href="https://www.instagram.com/ramy_khoualdi"> */}
          <a target="_blank">
            <img
              src="/icons/instagram.png"
              alt="github"
              className={styles.contactIcon}
            />
          </a>
        {/* </Link> */}
        {/* <Link href="https://www.linkedin.com/in/rami-khoualdi-70ba04157"> */}
          <a target="_blank">
            <img
              src="/icons/linkedin.png"
              alt="github"
              className={styles.contactIcon}
            />
          </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Contact;
