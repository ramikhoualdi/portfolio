import React from "react";
import About from "./modals/About/About";
import AppPreview1 from "./modals/AppPreview1/AppPreview1";
import AppPreview2 from "./modals/AppPreview2/AppPreview2";
import Contact from "./modals/Contact/Contact";
import Cube from "./modals/Cube/Cube";
import Header from "./modals/Header/Header";
import Skills from "./modals/Skills/Skills";

const Portfolio = (props) => {
  const { styles, scroll } = props;

  return (
    <main className={styles.main} data-scroll-container>
      <Header />
      <About />
      <Cube />
      <AppPreview1 />
      <Cube />
      <AppPreview2 />
      <Cube />
      <Skills />
      <Contact />
    </main>
  );
};

export default Portfolio;
