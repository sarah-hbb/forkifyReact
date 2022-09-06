import React, { useContext } from "react";
import SearchItem from "./SearchItem";
import classes from "./SearchList.module.css";


const SearchList = (props) => {
  const {searchRecipes} = props;


  return (
    <div>
      <ul className={classes["search-list"]}>
        {searchRecipes.map((recipe) => (
          <SearchItem
            key={recipe.id}
            id ={recipe.id}
            title={recipe.title}
            publisher={recipe.publisher}
            imageUrl={recipe.image_url}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
