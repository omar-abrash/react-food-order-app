import React from "react";

import FoodItem from "./FoodItem";
import foodList from "./FoodListArray";

import styles from "./FoodList.module.css";

const FoodList = () => {
  return (
    <div className={styles["food-list-container"]}>
      <ul>
        {foodList.map((foodItem) => (
          <FoodItem key={foodItem.id} foodItem={foodItem} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
