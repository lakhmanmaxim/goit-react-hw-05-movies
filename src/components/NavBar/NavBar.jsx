import { NavLink } from 'react-router-dom';

import styles from '../styles.module.css';

const NavBar = () => {
  return (
    <ul>
      <NavLink className={styles.nav_link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.nav_link} to="/movies">
        Movies
      </NavLink>
    </ul>
  );
};

export default NavBar;
