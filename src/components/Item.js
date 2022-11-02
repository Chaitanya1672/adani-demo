import React from "react";
import styles from "./item.module.css";

function Item(props) {
  return (
    <div className={styles.sideBarName}>
      <div>{props.name}</div>
    </div>
  );
}

export default Item;
