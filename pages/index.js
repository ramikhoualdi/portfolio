import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "../components/pages/Portfolio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ramykhoualdi.com</title>
        <meta name="description" content="Ramy Khoualdi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio styles={styles} />
    </div>
  );
}
