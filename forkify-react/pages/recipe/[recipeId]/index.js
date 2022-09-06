import React, { Fragment, useEffect, useState } from "react";
import { KEY, API_URL } from "../../../assets/config/config";
import { AJAX } from "../../../utils/fetchApi";
import classes from "./Recipe.module.css";

import RecipePictureSection from "../../../components/recipe/RecipePictureSection";
import RecipeServings from "../../../components/recipe/RecipeServings";
import RecipeCooking from "../../../components/recipe/RecipeCooking";
import RecipeDirection from "../../../components/recipe/RecipeDirection";

const RecipePage = (props) => {
  //console.log(props.recipeDetails);
  const recipeData = props.recipeDetails.data.recipe;
  //console.log(recipeData);
  const [quantityUpdateRate, setQuantityUpdateRate] = useState(1);

  const updateServingsHandler = (updatedServings) => {
    setQuantityUpdateRate(updatedServings / recipeData.servings);
    //console.log(quantityUpdateRate);
  };

  const [uploadByYou, setUploadByYou] = useState(false);

  return (
    <Fragment>
      <div className={classes["recipe"]}>
        <RecipePictureSection
          recipeData={recipeData}
          uploadByYou={uploadByYou}
        />
        <div className={classes["recipe-middle-section"]}>
          <div className={classes["recipe-servings-cooking"]}>
            <RecipeServings
              recipeData={recipeData}
              onUpdateServings={updateServingsHandler}
            />
            <RecipeCooking
              ingredients={recipeData.ingredients}
              quantityUpdateRate={quantityUpdateRate}
            />
          </div>
          <RecipeDirection recipeData={recipeData} />
        </div>
      </div>
    </Fragment>
  );
};

//using getServerSideProps to fetch data UPON REQUEST [clicking on a single recipe ] and get us to domain.com/recipe/recipeId. I have access to recipeId through context.params object
export async function getServerSideProps(context) {
  const recipeId = context.params.recipeId;
  const data = await AJAX(`${API_URL}${recipeId}?key=${KEY}`);
  // recipeUrl = `${API_URL}${id}?key=${KEY}`;

  return {
    props: {
      recipeDetails: data,
    },
  };
}

export default RecipePage;
