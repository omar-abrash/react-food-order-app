import React from "react";

import styles from "./UI.module.css";

const OverLayer = (props) => {
  return <div className={styles["over-layer"]}>{props.children}</div>;
};

export default OverLayer;
