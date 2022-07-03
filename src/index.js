import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import FoodContextProvider from "./store/FoodContextProvider";

ReactDOM.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  document.getElementById("root")
);
