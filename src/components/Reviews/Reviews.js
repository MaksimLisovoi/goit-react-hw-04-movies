import React, { Component } from "react";
import { getReviews } from "../../services/MovieDbApi";

import s from "./Reviews.module.css";
import PropTypes from "prop-types";

import _ from "lodash";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const reviews = await getReviews(movieId);

    this.setState({ reviews });
  }

  render() {
    return !_.isEmpty(this.state.reviews) ? (
      <>
        <h1>Reviews</h1>
        <ul className={s.reviewList}>
          {this.state.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author:{author}</h2>
              <p className={s.review}>{content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p className="no-reviews">No reviews.</p>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
export default Reviews;
