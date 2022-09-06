import React, { Fragment, useState } from "react";
import classes from "./SearchBox.module.css";
import {useRouter} from 'next/router';
import { RiSearch2Line } from "react-icons/ri";



const SearchBox = () => {

  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const searchInputChangeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // go to search page with query = searchInput
    router.push(`/search?query=${searchInput}`)
    setSearchInput("");
  };

  return (
    <Fragment>
      <form className={classes["search-box"]} onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchInput}
          onChange={searchInputChangeHandler}
        ></input>
        <button>
          <RiSearch2Line className={classes["search-icon"]} />
        </button>
      </form>
    </Fragment>
  );
};

export default SearchBox;
