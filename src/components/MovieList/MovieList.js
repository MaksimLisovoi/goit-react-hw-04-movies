import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <div className={s.container}>
      <ul className={s.movieList}>
        {movies.map(({ id, poster_path, title }) => (
          <li key={id} className={s.movieItem}>
            <NavLink
              className={s.MovieLink}
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview imgUrl={poster_path} title={title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MovieList);
