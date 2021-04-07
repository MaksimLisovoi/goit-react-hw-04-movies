import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import MovieDetailsView from "./views/MovieDetailsView";
import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";

import s from "./styles/base.module.css";

const linkStyles = {
  base: {
    color: "black",
  },
  active: {
    color: "red",
  },
};

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomeView} />

      <Route exact path={routes.movies} component={MoviesView} />
      <Route path={routes.movieDetails} component={MovieDetailsView} />
      <Route component={HomeView} />
    </Switch>
  </>
);

export default App;

// let url = `https://api.themoviedb.org/3/movie/76341?api_key=${key}`;
