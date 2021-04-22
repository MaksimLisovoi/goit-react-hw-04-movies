import React, { Component } from "react";
import s from "./SearchForm.module.css";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handelChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === "") {
      return;
    }

    onSubmit(query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <div className={s.FormContainer}>
        <form onSubmit={this.handelSubmit}>
          <input
            onChange={this.handelChange}
            className={s.Searchinput}
            value={this.state.query}
            name="queryValue"
            type="text"
            placeholder=" Search the movie"
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
