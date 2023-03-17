import React from "react";
import Link from "next/link";
import styles from "./Contact.module.css";
import Image from "next/image";

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
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/twitter.png"
            alt="twitter"
            className={styles.contactIcon}
            width={80}
            height={80}
          />
        </a>
        {/* </Link> */}
        <Link href="https://github.com/ramikhoualdi">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github.png"
              alt="github"
              className={styles.contactIcon}
              width={80}
              height={80}
            />
          </a>
        </Link>
        <Link href="mailto:ramykhweldi@gmail.com">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/email.png"
              alt="email"
              className={styles.contactIcon}
              width={80}
              height={80}
            />
          </a>
        </Link>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/instagram.png"
            alt="github"
            className={styles.contactIcon}
            width={80}
            height={80}
          />
        </a>
        <Link href="https://www.linkedin.com/in/ramikhoualdi/">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin.png"
              alt="github"
              className={styles.contactIcon}
              width={80}
              height={80}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
