import React, { Component } from "react";
import { getSearchedMovie } from "../services/MovieDbApi";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

class MoviesView extends Component {
  state = {
    movies: [],
    queryValue: "",
  };

  async componentDidMount() {
    const { queryValue } = this.state;

    const movies = await getSearchedMovie(queryValue);

    this.setState({ movies });
  }

  componentDidUpdate(prevProps, prevState) {
    const { queryValue } = this.state;

    if (prevState.queryValue !== queryValue) {
      this.getData();
    }
  }

  async getData() {
    const { queryValue } = this.state;

    const movies = await getSearchedMovie(queryValue);

    this.setState({ movies });
  }

  validateInput = (value) => {
    if (value.trim() !== "") {
      this.setState({ queryValue: value });
    }
  };

  onSubmit = (e) => {
    const { queryValue } = e.target;
    e.preventDefault();

    this.validateInput(queryValue.value);
    queryValue.value = "";
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {movies && <MovieList movies={movies} />}
      </>
    );
  }
}

export default MoviesView;
