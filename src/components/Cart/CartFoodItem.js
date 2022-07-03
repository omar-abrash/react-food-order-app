import React, { useContext } from "react";

import FoodContext from "../../store/food-context";

import Button from "../UI/Button";

import styles from "./Cart.module.css";

const FoodCartItem = (props) => {
  const foodCartCtx = useContext(FoodContext);

  const cartFoodInformation = props.foodItemInformation;
  // console.log(cartFoodInformation);
  // {foodId: '1stFood', foodName: 'mansaf', foodPrice: 20, mealsNumber: 1}
  const foodItemId = cartFoodInformation.foodId;
  const foodItemName = cartFoodInformation.foodName;
  const foodOneMealPrice = cartFoodInformation.foodPrice;
  const foodMealsNumber = cartFoodInformation.mealsNumber;
  const totalMealsPrice = foodMealsNumber * foodOneMealPrice;

  const addOneMealHandler = () => {
    foodCartCtx.addOneMeal(foodItemId);
  };
  const cancelOneMealHandler = () => {
    foodCartCtx.cancelOneMeal(foodItemId);
  };

  return (
    <>
      {foodMealsNumber > 0 && (
        <li className={styles["cart-food__item"]}>
          <div>
            <h3>{foodItemName}</h3>
            <span>price $ / 1 meal : {foodOneMealPrice} $</span>
          </div>
          <div className={styles["meals-number"]}>
            <span> x {foodMealsNumber}</span>
            <div>
              <Button onClick={addOneMealHandler}> + </Button>
              <Button onClick={cancelOneMealHandler}> - </Button>
            </div>
          </div>
          <div>
            <span>Total Price $ : {totalMealsPrice}</span>
          </div>
        </li>
      )}
      {foodMealsNumber === 0 && (
        <li className={styles["empty-item"]}>
          <div>
            <h3>{foodItemName}</h3>
          </div>
          <div>
            <Button onClick={addOneMealHandler}>Add One Meal</Button>
          </div>
        </li>
      )}
    </>
  );
};

export default FoodCartItem;
