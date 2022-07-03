import React from "react";

import FoodItemForm from "./FoodItemForm";

import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  // main data : (props.foodItem) --> id , foodName , foodPrice , foodDescribtion
  const foodItemInformation = props.foodItem;

  const foodNameAndPrice = {
    foodId: foodItemInformation.id,
    foodName: foodItemInformation.foodName,
    foodPrice: foodItemInformation.foodPrice,
  };

  return (
    <li className={styles["food-item"]}>
      <div>
        <h3>{foodItemInformation.foodName}</h3>
        <img src={foodItemInformation.photo} alt={"foodItemPhoto"} />
        <span>$ {foodItemInformation.foodPrice}</span>
      </div>
      <div>{foodItemInformation.foodDescribtion}</div>
      <div>
        <FoodItemForm foodFormData={foodNameAndPrice} />
      </div>
    </li>
  );
};

export default FoodItem;
