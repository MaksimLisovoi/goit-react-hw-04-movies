import React, { Component } from "react";
import { getSearchedMovie } from "../services/MovieDbApi";
import queryString from "query-string";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

class MoviesView extends Component {
  state = {
    movies: [],
    query: "",
  };

  async componentDidMount() {
    const { search, pathname } = this.props.location;

    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.getData();
    }
  }

  async getData() {
    const { query } = this.state;

    const movies = await getSearchedMovie(query);

    this.setState({ movies });
  }

  onSubmit = (newQuery) => {
    const { history, location } = this.props;

    this.setState({
      movies: [],
      query: newQuery,
    });

    history.push({
      ...location,
      search: `?query=${newQuery}`,
    });
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
