import React, { Component } from "react";
import { getMovie, getCast, getReviews } from "../services/MovieDbApi";

import { NavLink, Route } from "react-router-dom";

import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import InfoBar from "../components/InfoBar/InfoBar";
import routes from "../routes";

import _ from "lodash";

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
    const {
      title,
      poster_path,
      overview,
      genres,
      cast,
      reviews,
      vote_average,
    } = this.state;
    const { match } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <MovieDetailsCard
          title={title}
          imgUrl={poster_path}
          overview={overview}
          genres={genres}
          rating={vote_average}
        />
        <InfoBar match={match} />

        <Route
          exact
          path={`${match.path}${routes.cast}`}
          render={(props) => <Cast {...props} cast={cast} />}
        />
        <Route
          exact
          path={`${match.path}${routes.reviews}`}
          render={(props) =>
            !_.isEmpty(reviews) ? (
              <Reviews {...props} reviews={reviews} />
            ) : (
              <p className="no-reviews">No reviews.</p>
            )
          }
        />

        {/* <Route path={match.path} component={Cast} /> */}
      </>
    );
  }
}

export default MovieDetailsView;
