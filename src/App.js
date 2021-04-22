import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";

import Spinner from "./components/Spinner/Spinner";
import s from "./styles/base.module.css";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /*webpackChunkName: 'home-view' */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView.js" /*webpackChunkName: 'movies-view' */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsView.js" /*webpackChunkName: 'movie-details-view' */
  )
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />

        <Route exact path={routes.movies} component={MoviesView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route component={HomeView} />
      </Switch>
    </Suspense>
  </>
);

export default App;

// let url = `https://api.themoviedb.org/3/movie/76341?api_key=${key}`;
