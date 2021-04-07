import React from "react";
import s from "./MovieDetailsCard.module.css";
import { arrayOf, object } from "prop-types";
import PropTypes from "prop-types";

const MovieDetailsCard = ({ title, imgUrl, overview, genres, rating }) => {
  return (
    <div className={s.MovieDetailsCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
        alt={title}
        width="300px"
      />
      <div className={s.MovieInfo}>
        <h2 className={s.title}>{title}</h2>

        <p>User score: {rating * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && genres.map(({ id, name }) => <span key={id}>{name}</span>)}
      </div>
    </div>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: arrayOf(object),
    rating: PropTypes.number,
  }),
};

export default MovieDetailsCard;
