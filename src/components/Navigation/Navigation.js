import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav>
      <ul className={s.NavList}>
        <li className={s.NavListItem}>
          <NavLink
            exact
            to={routes.home}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.NavListItem}>
          <NavLink
            to={routes.movies}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
