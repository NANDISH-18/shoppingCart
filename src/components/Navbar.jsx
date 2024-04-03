import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { itemContext,useValue } from "../itemContext";

function Navbar() {
  // const value = useContext(itemContext)
  const {total, item , clear, toggle} = useValue();

  // console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
      <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={clear}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
