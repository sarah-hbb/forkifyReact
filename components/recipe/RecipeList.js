import React, { useContext } from "react";
import RecipeItem from '../../components/recipe/RecipeItem';
import classes from "./RecipeList.module.css";
import BookmarksContext from '../../store/bookmarks-context';



const RecipeList = (props) => {
  const {recipes} = props;
  //console.log(recipes);
  return (
    <div>
      <ul className={classes["recipe-list"]}>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipeData={recipe}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
