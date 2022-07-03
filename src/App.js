import React from "react";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import FoodList from "./components/FoodList/FoodList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <FoodList />
    </React.Fragment>
  );
}

export default App;
