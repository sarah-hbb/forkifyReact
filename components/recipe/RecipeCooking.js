import React, { Fragment } from "react";
import classes from "./RecipeCooking.module.css";
import { Fraction } from "fractional";
import { BiCheck } from "react-icons/bi";

const RecipeCooking = (props) => {
  const ingredients = props.ingredients;
  const quantityUpdateRate = props.quantityUpdateRate;
  //console.log(quantityUpdateRate);

  return (
    <Fragment>
      <div className={classes["ingredients"]}>
        {ingredients.map((ing, index) => (
          <div className={classes["ingredient-item"]} key={index}>
            <BiCheck className={classes["ingredient-icon"]} />
            {`${
              !ing.quantity
                ? ""
                : new Fraction(quantityUpdateRate * ing.quantity).toString()
            } ${ing.unit ? ing.unit : ''} ${ing.description}`}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default RecipeCooking;
