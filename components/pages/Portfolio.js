import React from "react";
import Header from "./modals/Header";
import About from "./modals/About";
import AppPreview from "./modals/AppPreview";
import Others from "./modals/Others";
import Contact from "./modals/Contact";
import Skills from "./modals/Skills";
const data = [
  {
    nb: "01",
    name: "Sidegame",
    position: "Full Stack Web & Mobile Developer • UI & UX Designer",
    tech: "React Native • Reactjs • Nextjs • Redux • Firebase • Google Cloud Platform",
    desc: "Developed a mobile application for football fans, featuring live scores, news, match details, quizzes, in-app store, push notification, and game features. Continuously updated to ensure optimal user experience.",
    platform: "ios & android app • web dashboard",
    imagesFolder: "sidegame",
  },
  {
    nb: "02",
    name: "Medipocket World",
    position: "Frontend Developer • UI & UX Designer",
    tech: "React Native • React js • Redux • Node js • Firebase • Graphql • REST API • Stripe Payment",
    desc: "Developed MediPocket, a healthcare app that connects patients worldwide with top-rated US specialists and hospitals. Enjoy personalized care, expert opinions, an AI symptom checker, video call, and Stripe payment options.",
    platform: "ios ,android and Progressive Web App",
    imagesFolder: "medipocket",
  },
  {
    nb: "03",
    name: "RideShare",
    position: "Frontend Mobile Developer",
    tech: "React Native • Redux • Google Maps API",
    desc: "Developed RideShare, a mobile app with a user-friendly UI/UX design, featuring a bottom sheet and Google Maps API integration for easy navigation and ride requests.",
    platform: "ios & android app",
    imagesFolder: "rideshare",
  },
  {
    nb: "04",
    name: "Hearppl",
    position: "Full Stack Web & Mobile Developer",
    tech: "React Native • Redux • Firebase",
    desc: "Created and designed a mobile app that features short videos, allowing users to upload their own content and engage with others. With the ability to like, comment, and follow other users, the app creates a personalized video feed for each user based on hashtags.",
    platform: "ios & android app",
    imagesFolder: "hearppl",
  },
  {
    nb: "05",
    name: "Ertnashville",
    position: "Full Stack Mobile Developer",
    tech: "React Native • Redux • Firebase",
    desc: "Designed and developed that lets users make phone calls, create property listings and share access, upload photos, set security rules, and provide guidance to other users. It's a one-stop-shop for managing properties, and it's intuitive and user-friendly.",
    platform: "ios & android app",
    imagesFolder: "ertnashville",
  },
  {
    nb: "06",
    name: "D2",
    position: "Full Stack Web & Mobile Developer",
    tech: "React Native • Redux • Firebase • Google Maps API",
    desc: "Created a mobile app for ride-hailing and home delivery. Passengers can easily request a ride or delivery while drivers can check and confirm rides before completing them through the same app.",
    platform: "ios & android app",
    imagesFolder: "d2",
  },
];

const Portfolio = (props) => {
  const { styles, scroll } = props;
  return (
    <div className={styles.main} id="js-scroll">
      <Header />
      <About />
      {data.map((item, index) => (
        <AppPreview index={index} item={item} />
      ))}
      <Others />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;
