import React, { Component } from "react";
import { getCast } from "../../services/MovieDbApi";

import default_img from "./default_img.png";
import PropTypes from "prop-types";
import s from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const cast = await getCast(movieId);

    this.setState({ cast });
  }

  render() {
    console.log(this.props);
    return (
      <>
        <section className={s.CastSection}>
          <h1>Cast</h1>
          <ul className={s.CastList}>
            {this.state.cast.map(({ id, profile_path, name }) => (
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

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
