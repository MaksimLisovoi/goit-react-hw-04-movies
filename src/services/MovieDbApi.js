import axios from "axios";

let baseUrl = `https://api.themoviedb.org/3/`;
let key = `e6acfc4fc0153671a91c6ac155f53696`;

async function getTrendingMovie() {
  try {
    const trendingMovies = await axios.get(
      `${baseUrl}trending/movie/week?api_key=${key}`
    );

    return trendingMovies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function getSearchedMovie(query) {
  try {
    const searchedMovie = await axios.get(
      `${baseUrl}search/movie?api_key=${key}&query=${query}`
    );
    console.log(searchedMovie.data.results);
    return searchedMovie.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function getMovie(movieId) {
  try {
    const movieDetails = await axios.get(
      `${baseUrl}movie/${movieId}?api_key=${key}`
    );

    return movieDetails.data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getCast(movieId) {
  try {
    const cast = await axios.get(
      `${baseUrl}movie/${movieId}/credits?api_key=${key}`
    );

    return cast.data.cast;
  } catch (error) {
    console.error(error.message);
  }
}

async function getReviews(movieId) {
  try {
    const reviews = await axios.get(
      `${baseUrl}movie/${movieId}/reviews?api_key=${key}`
    );

    return reviews.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

// /reviews

export { getTrendingMovie, getMovie, getCast, getReviews, getSearchedMovie };
