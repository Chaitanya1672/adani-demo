import { FaHamburger } from 'react-icons/fa';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import styles from './header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h4 className={styles.navIcon}><FaHamburger /><strong className={styles.navTitle}>adani </strong>| EV Charging</h4>
      <ul className={styles.navLinks}>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>How it Works?</li>
        <li>Plan a Trip</li>
        <li><BsFillEmojiSunglassesFill /></li>
      </ul>
    </nav>
  )
};
export default Header;