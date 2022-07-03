import React, { useState, useEffect } from "react";

import FoodContext from "./food-context";

const FoodContextProvider = (props) => {
  // firstFoodArray is Inital food array after user adding
  const [foodItemsArray, addFoodItemToFoodItemsArray] = useState([]);
  const [numberOfMeals, setNumberOfMeal] = useState(0);

  // helper function to calculte numberOfMeals after add food Item
  const numberOfMealsHandler = () => {
    let numberOfMelasCount = 0;
    foodItemsArray.forEach((foodItem) => {
      numberOfMelasCount += foodItem.mealsNumber;
    });
    setNumberOfMeal(numberOfMelasCount);
  };
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // this part for useEffet
  useEffect(() => {
    numberOfMealsHandler();
  });
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // ::::::::::::::::    :::::::::::::::::   ::::::::::::::::::
  // the first action from FoodItemForm.js
  const addFoodItemHandler = (foodItem) => {
    // foodItem : {foodId: '1stFood', foodName: 'mansaf', foodPrice: 20, mealsNumber: 1}

    // first giss when we add the first FoodItem
    if (foodItemsArray.length === 0) {
      addFoodItemToFoodItemsArray((prevState) => [...prevState, foodItem]);
    }
    // after add the first foodItem
    if (foodItemsArray.length > 0) {
      if (
        // this giss if repeat the foodItem
        // we must change only the mealsNumber
        foodItemsArray.filter(
          (foodItemElement) => foodItemElement.foodId === foodItem.foodId
        ).length > 0
      ) {
        foodItemsArray.forEach((foodItemElement, Index) => {
          // this option when we add same foodItem with same foodId
          if (foodItemElement.foodId === foodItem.foodId) {
            foodItemsArray[Index].mealsNumber =
              foodItemsArray[Index].mealsNumber + foodItem.mealsNumber;
            addFoodItemToFoodItemsArray((prevState) => [...prevState]);
          }
        });
      } else {
        // if the filter array value === 0 , this mean we dont have reapte FoodItem
        addFoodItemToFoodItemsArray((prevState) => [...prevState, foodItem]);
      }
    }
  };
  // ::::::::::::::::    :::::::::::::::::   ::::::::::::::::::
  // the second action
  const addOneMealHandler = (foodItemId) => {
    // console.log(foodItemId);
    foodItemsArray.forEach((foodItemElement, Index) => {
      if (foodItemElement.foodId === foodItemId) {
        foodItemsArray[Index].mealsNumber += 1;
      }

      addFoodItemToFoodItemsArray((prevState) => [...prevState]);
    });
  };
  const cancelOneMealHandler = (foodItemId) => {
    // console.log(foodItemId);
    foodItemsArray.forEach((foodItemElement, Index) => {
      if (foodItemElement.foodId === foodItemId) {
        foodItemsArray[Index].mealsNumber -= 1;
      }
      addFoodItemToFoodItemsArray((prevState) => [...prevState]);
    });
  };

  // to clear all foodItem from foodItemsArray
  const clearFoodItemArrayHandler = () => {
    addFoodItemToFoodItemsArray([]);
  };

  // console.log(foodItemsArray);
  // console.log(numberOfMeals);
  return (
    <FoodContext.Provider
      value={{
        addFoodItem: addFoodItemHandler,
        numberOfAllMelas: numberOfMeals,
        cartFoodList: foodItemsArray,
        addOneMeal: addOneMealHandler,
        cancelOneMeal: cancelOneMealHandler,
        clearFoodItemArray: clearFoodItemArrayHandler,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
