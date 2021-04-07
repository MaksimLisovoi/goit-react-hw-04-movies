import React, { Component } from "react";
import s from "./Reviews.module.css";
import PropTypes from "prop-types";

class Reviews extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Reviews</h1>
        <ul className={s.reviewList}>
          {this.props.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author:{author}</h2>
              <p className={s.review}>{content}</p>
            </li>
          ))}
        </ul>
      </>
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
