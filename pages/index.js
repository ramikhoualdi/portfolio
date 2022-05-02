import { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "../components/pages/Portfolio";
import { useRouter } from "next/router";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>ramykhoualdi.com</title>
        <meta name="description" content="Ramy Khoualdi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[asPath, Portfolio]}
        location={asPath}
        containerRef={containerRef}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
      >
        <main data-scroll-container ref={containerRef}>
          <Portfolio styles={styles} scroll={scroll} />
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}
