import React from "react";
import s from "./MoviePreview.module.css";

const MoviePreview = ({ imgUrl, title }) => {
  return (
    <>
      <img
        className={s.picture}
        width="200px"
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
        alt={title}
      />
      <div className={s.description}>
        <h5 className={s.title}>{title}</h5>
      </div>
    </>
  );
};

export default MoviePreview;
