import React from "react";

const FoodContext = React.createContext({
  addFoodItem: (foodItem) => {},
  numberOfAllMelas: 0,
  cartFoodList: [],
  addOneMeal: (foodItemId) => {},
  cancelOneMeal: (foodItemId) => {},
  clearFoodItemArray: () => {},
});

export default FoodContext;
