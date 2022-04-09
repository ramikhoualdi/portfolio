import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "../components/pages/Portfolio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Ramy Khoualdi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio styles={styles} />
    </div>
  );
}
