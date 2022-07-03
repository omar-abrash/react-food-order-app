import React from "react";

import foodPhoto from "../../media/foodPhoto2.jpg";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div>
        <img src={foodPhoto} alt="" />
      </div>
      <div>
        <p>using this food app to order your favorite delicious food </p>
      </div>
    </div>
  );
};

export default LandingPage;
