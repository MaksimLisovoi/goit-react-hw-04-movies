import React, { Component, Suspense, lazy } from "react";
import { getMovie } from "../services/MovieDbApi";
import { Route } from "react-router-dom";

import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";
import Spinner from "../components/Spinner/Spinner";

import routes from "../routes";

const InfoBar = lazy(() =>
  import(
    "../components/InfoBar/InfoBar" /*webpackChunkName: 'infobar-component' */
  )
);
const Reviews = lazy(() =>
  import(
    "../components/Reviews/Reviews" /*webpackChunkName: 'reviews-component' */
  )
);
const Cast = lazy(() =>
  import("../components/Cast/Cast" /*webpackChunkName: 'cast-component' */)
);

class MovieDetailsView extends Component {
  state = {
    title: null,
    poster_path: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await getMovie(movieId);

    console.log(movie);

    this.setState({ ...movie });
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

        <Suspense fallback={<Spinner />}>
          <InfoBar match={match} />

          <Route
            exact
            path={`${match.path}${routes.cast}`}
            render={(props) => <Cast {...props} />}
          />
          <Route
            exact
            path={`${match.path}${routes.reviews}`}
            render={(props) => <Reviews {...props} />}
          />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsView;
