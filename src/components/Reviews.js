import React, { Component } from "react";

class Reviews extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Reviews</h1>
        <ul>
          {this.props.reviews.map((el) => (
            <li key={el.id}>
              <h2>Author:{el.author}</h2>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
