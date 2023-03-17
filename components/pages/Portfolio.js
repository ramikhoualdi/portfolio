import React from "react";
import Header from "./modals/Header";
import About from "./modals/About";
import AppPreview from "./modals/AppPreview";
import Others from "./modals/Others";
import Contact from "./modals/Contact";
import Skills from "./modals/Skills";
// sidegame
import sidegame1 from "./../../public/images/sidegame/s1.png";
import sidegame2 from "./../../public/images/sidegame/s2.png";
import sidegame3 from "./../../public/images/sidegame/s3.png";
import sidegame4 from "./../../public/images/sidegame/s4.png";
import sidegame5 from "./../../public/images/sidegame/s5.png";
// medipocket
import medipocket1 from "./../../public/images/medipocket/s1.png";
import medipocket2 from "./../../public/images/medipocket/s2.png";
import medipocket3 from "./../../public/images/medipocket/s3.png";
import medipocket4 from "./../../public/images/medipocket/s4.png";
import medipocket5 from "./../../public/images/medipocket/s5.png";
// rideshare
import rideshare1 from "./../../public/images/rideshare/s1.png";
import rideshare2 from "./../../public/images/rideshare/s2.png";
import rideshare3 from "./../../public/images/rideshare/s3.png";
import rideshare4 from "./../../public/images/rideshare/s4.png";
import rideshare5 from "./../../public/images/rideshare/s5.png";
// hearppl
import hearppl1 from "./../../public/images/hearppl/s1.png";
import hearppl2 from "./../../public/images/hearppl/s2.png";
import hearppl3 from "./../../public/images/hearppl/s3.png";
import hearppl4 from "./../../public/images/hearppl/s4.png";
import hearppl5 from "./../../public/images/hearppl/s5.png";
// ertnashville
import ertnashville1 from "./../../public/images/ertnashville/s1.png";
import ertnashville2 from "./../../public/images/ertnashville/s2.png";
import ertnashville3 from "./../../public/images/ertnashville/s3.png";
import ertnashville4 from "./../../public/images/ertnashville/s4.png";
import ertnashville5 from "./../../public/images/ertnashville/s5.png";
// d2
import d21 from "./../../public/images/d2/s1.png";
import d22 from "./../../public/images/d2/s2.png";
import d23 from "./../../public/images/d2/s3.png";
import d24 from "./../../public/images/d2/s4.png";
import d25 from "./../../public/images/d2/s5.png";

const data = [
  {
    nb: "01",
    name: "Sidegame",
    position: "Full Stack Web & Mobile Developer • UI & UX Designer",
    tech: "React Native • Reactjs • Nextjs • Redux • Firebase • Google Cloud Platform",
    desc: "Developed a mobile application for football fans, featuring live scores, news, match details, quizzes, in-app store, push notification, and game features. Continuously updated to ensure optimal user experience.",
    platform: "ios & android app • web dashboard",
    imagesFolder: "sidegame",
    img1: sidegame1,
    img2: sidegame2,
    img3: sidegame3,
    img4: sidegame4,
    img5: sidegame5,
  },
  {
    nb: "02",
    name: "Medipocket World",
    position: "Frontend Developer • UI & UX Designer",
    tech: "React Native • React js • Redux • Node js • Firebase • Graphql • REST API • Stripe Payment",
    desc: "Developed MediPocket, a healthcare app that connects patients worldwide with top-rated US specialists and hospitals. Enjoy personalized care, expert opinions, an AI symptom checker, video call, and Stripe payment options.",
    platform: "ios ,android and Progressive Web App",
    imagesFolder: "medipocket",
    img1: medipocket1,
    img2: medipocket2,
    img3: medipocket3,
    img4: medipocket4,
    img5: medipocket5,
  },
  {
    nb: "03",
    name: "RideShare",
    position: "Frontend Mobile Developer",
    tech: "React Native • Redux • Google Maps API",
    desc: "Developed RideShare, a mobile app with a user-friendly UI/UX design, featuring a bottom sheet and Google Maps API integration for easy navigation and ride requests.",
    platform: "ios & android app",
    imagesFolder: "rideshare",
    img1: rideshare1,
    img2: rideshare2,
    img3: rideshare3,
    img4: rideshare4,
    img5: rideshare5,
  },
  {
    nb: "04",
    name: "Hearppl",
    position: "Full Stack Web & Mobile Developer",
    tech: "React Native • Redux • Firebase",
    desc: "Created and designed a mobile app that features short videos, allowing users to upload their own content and engage with others. With the ability to like, comment, and follow other users, the app creates a personalized video feed for each user based on hashtags.",
    platform: "ios & android app",
    imagesFolder: "hearppl",
    img1: hearppl1,
    img2: hearppl2,
    img3: hearppl3,
    img4: hearppl4,
    img5: hearppl5,
  },
  {
    nb: "05",
    name: "Ertnashville",
    position: "Full Stack Mobile Developer",
    tech: "React Native • Redux • Firebase",
    desc: "Designed and developed that lets users make phone calls, create property listings and share access, upload photos, set security rules, and provide guidance to other users. It's a one-stop-shop for managing properties, and it's intuitive and user-friendly.",
    platform: "ios & android app",
    imagesFolder: "ertnashville",
    img1: ertnashville1,
    img2: ertnashville2,
    img3: ertnashville3,
    img4: ertnashville4,
    img5: ertnashville5,
  },
  {
    nb: "06",
    name: "D2",
    position: "Full Stack Web & Mobile Developer",
    tech: "React Native • Redux • Firebase • Google Maps API",
    desc: "Created a mobile app for ride-hailing and home delivery. Passengers can easily request a ride or delivery while drivers can check and confirm rides before completing them through the same app.",
    platform: "ios & android app",
    imagesFolder: "d2",
    img1: d21,
    img2: d22,
    img3: d23,
    img4: d24,
    img5: d25,
  },
];

const Portfolio = (props) => {
  const { styles, scroll } = props;
  return (
    <div className={styles.main} id="js-scroll">
      <Header />
      <About />
      {data.map((item, index) => (
        <AppPreview key={index} item={item} />
      ))}
      <Others />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;
