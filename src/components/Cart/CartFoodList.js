import { useContext } from "react";

import FoodContext from "../../store/food-context";
import CartFoodItem from "./CartFoodItem";
import Button from "../UI/Button";

import styles from "./Cart.module.css";

const CartFoodList = (props) => {
  const foodCartCtx = useContext(FoodContext);

  const cartFoodList = foodCartCtx.cartFoodList;
  //   console.log(cartFoodList); // it is an array same as foodListArray on strucutre
  // {foodId: '1stFood', foodName: 'mansaf', foodPrice: 20, mealsNumber: 1}
  const totalMealsPrice = () => {
    let totalMealsPriceCount = 0;
    cartFoodList.forEach((cartFoodItem) => {
      totalMealsPriceCount += cartFoodItem.foodPrice * cartFoodItem.mealsNumber;
    });
    return totalMealsPriceCount;
  };

  const orderingHandler = () => {
    console.log("Ordarning these Items ... ", cartFoodList);
  };

  const clearOrderingHandler = () => {
    foodCartCtx.clearFoodItemArray();
  };

  return (
    <ul className={styles["food-cart__list"]}>
      {<li className={styles["top-cart"]}>:: Your Cart ::</li>}

      {cartFoodList.length === 0 && (
        <li className={styles["top-cart"]}>Empty Cart</li>
      )}

      {cartFoodList.map((cartFoodItem) => (
        <CartFoodItem
          key={cartFoodItem.foodId}
          foodItemInformation={cartFoodItem}
        />
      ))}
      {
        <li className={styles["total-price"]}>
          <div>
            <h3>Total Melas Price :</h3>
          </div>
          <div>
            <span className={styles["total-price__dolar"]}>
              {totalMealsPrice()} $
            </span>
          </div>
        </li>
      }
      {(cartFoodList.length > 0 && totalMealsPrice()) > 0 && (
        <>
          <Button className={styles.btn} onClick={orderingHandler}>
            Ordering
          </Button>
          <Button className={styles.btn} onClick={clearOrderingHandler}>
            Clear Ordering Menu
          </Button>
        </>
      )}
      <Button className={styles.btn} onClick={props.getNewClickedState}>
        Return To Menu
      </Button>
    </ul>
  );
};

export default CartFoodList;
