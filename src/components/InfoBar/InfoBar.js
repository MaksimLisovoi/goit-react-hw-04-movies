import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./InfoBar.module.css";

const InfoBar = ({ match, location }) => {
  return (
    <ul className={s.InfoList}>
      <li className={s.InfoListItem}>
        <NavLink
          activeClassName={s.NavLinkActive}
          className={s.NavLink}
          to={{
            pathname: `${match.url}${routes.cast}`,
            state: { ...location.state },
          }}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={s.NavLinkActive}
          className={s.NavLink}
          to={{
            pathname: `${match.url}${routes.reviews}`,
            state: { ...location.state },
          }}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default InfoBar;
