import React from "react";
import styles from "./Cube.module.css";
const Cube = props => {
  return <div className={styles.cube} >
    <p className={styles.nb}>{props.nb}</p>
  </div>;
};
export default Cube;
