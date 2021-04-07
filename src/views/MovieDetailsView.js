import React, { Component } from "react";
import { getMovie, getCast, getReviews } from "../services/MovieDbApi";

import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";

class MovieDetailsView extends Component {
  state = {
    title: null,
    poster_path: null,
    overview: null,
    genres: null,
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await getMovie(movieId);
    const cast = await getCast(movieId);
    const reviews = await getReviews(movieId);
    console.log(movie);
    // const genres = movie.genres.map((genre) => genre.name);

    this.setState({ ...movie, cast, reviews });
    console.log(this.state);
    // this.setState({ genres });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { title, poster_path, overview, genres, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад{" "}
        </button>
        <h2>{title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="300px"
        />
        <p>{overview}</p>
        <NavLink to={`${match.url}${routes.cast}`}>Cast</NavLink>
        <NavLink to={`${match.url}${routes.reviews}`}>Reviews</NavLink>

        <Route
          exact
          path={`${match.path}${routes.cast}`}
          render={(props) => <Cast {...props} cast={cast} />}
        />
        <Route
          exact
          path={`${match.path}${routes.reviews}`}
          render={(props) => <Reviews {...props} reviews={reviews} />}
        />

        {/* <Route path={match.path} component={Cast} /> */}
      </>
    );
  }
}

export default MovieDetailsView;
