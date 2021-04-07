import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
