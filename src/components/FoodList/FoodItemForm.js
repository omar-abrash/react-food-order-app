import React, { useState, useContext } from "react";

import foodContext from "../../store/food-context";
import Button from "../UI/Button";

import styles from "./FoodItem.module.css";

const FoodItemForm = (props) => {
  // console.log(props.foodFormData);

  const [numberOfMeals, setNumberOfMeals] = useState(1);

  const foodCtx = useContext(foodContext);

  const numberMealsChangeHandler = (event) => {
    setNumberOfMeals(event.target.value);
  };

  const submitFoodFormHandler = (event) => {
    event.preventDefault();
    const mealsInformation = {
      ...props.foodFormData,
      mealsNumber: +numberOfMeals,
    };
    // console.log(mealsInformation);
    foodCtx.addFoodItem(mealsInformation);
    setNumberOfMeals(1);
  };

  return (
    <form className={styles.form} onSubmit={submitFoodFormHandler}>
      <label htmlFor="meals">number of meals</label>
      <input
        id="meals"
        type="number"
        min="1"
        max="5"
        onChange={numberMealsChangeHandler}
        value={numberOfMeals}
      />
      <Button className={styles.btn} type="submit">
        Add to Cart
      </Button>
    </form>
  );
};

export default FoodItemForm;
