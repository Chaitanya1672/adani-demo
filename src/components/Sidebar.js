import React from "react";
import styles from "./sidebar.module.css";
import { FaHamburger } from "react-icons/fa";
import Item from "./Item";

function Sidebar(props) {
  const { flag, setFlag } = props.flag;
  const { right } = props.side;

  const showSidebar = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className={styles.backdp} onClick={showSidebar}></div>
      <div
        className={
          right ? styles.sidebarContainerRight : styles.sidebarContainer
        }
      >
        <div className={styles.menuIcon}>
          <FaHamburger className={styles.Icon} onClick={showSidebar} />
        </div>

        <div className={styles.pi}>
          <h4>ANALYTICS</h4>
          <Item name="Dashboard " />
          <Item name="Performance" />
        </div>

        <div className={styles.pi}>
          <h4>CONTENT</h4>
          <Item name="Sales" />
          <Item name="Checklist" />
          <Item name="Customers" />
        </div>

        <div className={styles.pi}>
          <h4>CUSTOMIZATION</h4>
          <Item name="Segments" />
          <Item name="Themems" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
