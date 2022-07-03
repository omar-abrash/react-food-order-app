import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import FoodContext from "../../store/food-context";
import CartFoodList from "../Cart/CartFoodList";
import OverLayer from "../UI/OverLayer";

import cartPhoto from "../../media/cart.png";
import styles from "./Header.module.css";

const CartDiv = (props) => {
  const foodCartCtx = useContext(FoodContext);

  const [divClickedState, setNewDivClickedState] = useState(false);
  const [changingMealsNumber, setChangingMealsNumber] = useState(false);

  const divClickedHandler = () => {
    setNewDivClickedState(true);
  };

  const closeCartHandler = () => {
    setNewDivClickedState(false);
  };

  useEffect(() => {
    if (foodCartCtx.numberOfAllMelas > 0) {
      setTimeout(() => {
        setChangingMealsNumber(true);
      }, 300);
    }

    return setChangingMealsNumber(false);
  }, [foodCartCtx.numberOfAllMelas]);

  return (
    <React.Fragment>
      <div
        className={`${styles.cart} ${changingMealsNumber && styles.puls} `}
        onClick={divClickedHandler}
      >
        <img src={cartPhoto} alt="cartPhoto" />
        <span>:: Your Cart :: </span>
        <span>{foodCartCtx.numberOfAllMelas}</span>
      </div>

      {divClickedState &&
        ReactDOM.createPortal(
          <OverLayer>
            <CartFoodList getNewClickedState={closeCartHandler} />
          </OverLayer>,
          document.getElementById("food-cart")
        )}
    </React.Fragment>
  );
};

export default CartDiv;
