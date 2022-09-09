import React from 'react';
import classes from './RecipeDirection.module.css'

const RecipeDirection = (props) => {
    const recipeData = props.recipeData;
    //console.log(recipeData);
  return (
    <div className={classes['recipe-direction']}>
        <h1>HOW TO COOK IT</h1>
        <p>
        This recipe was carefully designed and tested by <span>
          {recipeData.publisher}</span>. Please check out directions at their website
        </p>
        <button>
            <a href={recipeData.source_url}>
            Direction
            </a>
        </button>

    </div>
  )
}

export default RecipeDirection