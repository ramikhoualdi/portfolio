import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Portfolio from '../components/pages/Portfolio'

export default function Home() {
  return (
    
      <div
        data-scroll-container
        ref={containerRef}
        className={styles.container}
      >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Rami Khoualdi" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Portfolio />
        
      </div>
  );
}
