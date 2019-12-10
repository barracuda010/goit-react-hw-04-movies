import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.nav_bar}>
      <ul className={styles.nav_link}>
        <li>
          <NavLink to={routes.HOME} className={styles.link_mod}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.MOVIES} className={styles.link_mod}>
            Фильмы
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
