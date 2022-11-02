import React from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import styles from "./header.module.css";
import Sidebar from "./Sidebar";
import debounce from "lodash.debounce";

const Header = () => {
  const [flag, setFlag] = React.useState(false);
  const [right, setRight] = React.useState(false);

  const showSidebar = debounce(() => {
    setFlag(!flag);
    setRight(false);
  }, 0);
  const showSidebarRight = () => {
    setFlag(!flag);
    setRight(true);
  };
  return (
    <div>
      {flag && <Sidebar flag={{ flag, setFlag }} side={{ right }} />}

      <nav className={styles.navbar}>
        <h4 className={styles.navIcon} onClick={showSidebar}>
          <FaHamburger />
          <strong className={styles.navTitle}>adani </strong>| EV Charging
        </h4>

        <ul className={styles.navLinks}>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>How it Works?</li>
          <li>Plan a Trip</li>
          <li onClick={showSidebarRight}>
            <BsFillEmojiSunglassesFill />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
