import React from "react";
import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  return (
    <div className={s.FormContainer}>
      <form onSubmit={onSubmit}>
        <input
          className={s.Searchinput}
          name="queryValue"
          type="text"
          placeholder=" Search the movie"
        />
      </form>
    </div>
  );
};

export default SearchForm;
