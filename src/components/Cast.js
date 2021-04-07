import React, { Component } from "react";

class Cast extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Cast</h1>
        <ul>
          {this.props.cast.map((el) => (
            <li key={el.id}>
              <img
                width="200"
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt={el.name}
              />
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
