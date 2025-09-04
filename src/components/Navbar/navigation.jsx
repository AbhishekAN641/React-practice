import React from "react";
import styles from "./navbar.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./Header.png" alt="do some coding logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
