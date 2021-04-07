import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./InfoBar.module.css";

const InfoBar = ({ match }) => {
  return (
    <ul className={s.InfoList}>
      <li className={s.InfoListItem}>
        <NavLink
          activeClassName={s.NavLinkActive}
          className={s.NavLink}
          to={`${match.url}${routes.cast}`}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={s.NavLinkActive}
          className={s.NavLink}
          to={`${match.url}${routes.reviews}`}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default InfoBar;
