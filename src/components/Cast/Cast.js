import React, { Component } from "react";
import s from "./Cast.module.css";
import default_img from "./default_img.png";

class Cast extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <section className={s.CastSection}>
          <h1>Cast</h1>
          <ul className={s.CastList}>
            {this.props.cast.map(({ id, profile_path, name }) => (
              <li className={s.CastItem} key={id}>
                <img
                  width="150"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : default_img
                  }
                  alt={name}
                />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default Cast;
