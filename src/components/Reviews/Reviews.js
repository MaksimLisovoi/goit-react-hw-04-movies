import React, { Component } from "react";
import s from "./Reviews.module.css";

class Reviews extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Reviews</h1>
        <ul className={s.reviewList}>
          {this.props.reviews.map((el) => (
            <li key={el.id}>
              <h2>Author:{el.author}</h2>
              <p className={s.review}>{el.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
