import React from "react";

import CartDiv from "./CartDiv";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <h1>React-Food-App</h1>
        </a>
      </div>
      <CartDiv />
    </header>
  );
};

export default Header;
