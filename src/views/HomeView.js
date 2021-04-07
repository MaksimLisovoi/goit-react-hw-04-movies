import React, { Component } from "react";
import { getTrendingMovie } from "../services/MovieDbApi";

import MovieList from "../components/MovieList/MovieList";

class HomeView extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const popularMovies = await getTrendingMovie();

    console.log(popularMovies);
    this.setState({ popularMovies });
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h1>Эта главная страница </h1>
        <MovieList movies={this.state.popularMovies} />
      </>
    );
  }
}
export default HomeView;
