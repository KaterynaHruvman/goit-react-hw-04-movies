import { NavLink, Router } from 'react-router-dom';

import Container from '../Container/Container';

import styles from './NavMenu.module.scss';

const NavMenu = () => (
  <Container>
    <ul className={styles.naviLinks}>
      <li>
        <Router>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          activeClassName={styles.navLink__active}
        >
            Home
        </NavLink>
          </Router>
      </li>
      <li>
        <Router>
        <NavLink
          exact
          to="/movies"
          className={styles.navLink}
          activeClassName={styles.navLink__active}
        >
            Movies
        </NavLink>
            </Router>
      </li>
    </ul>
  </Container>
);

export default NavMenu;