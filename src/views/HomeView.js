import React, { Component } from "react";
import { getTrendingMovie } from "../services/MovieDbApi";

import MovieList from "../components/MovieList/MovieList";

class HomeView extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const popularMovies = await getTrendingMovie();

    this.setState({ popularMovies });
  }

  render() {
    return (
      <>
        <MovieList movies={this.state.popularMovies} />
      </>
    );
  }
}
export default HomeView;
