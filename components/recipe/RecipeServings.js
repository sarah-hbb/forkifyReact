import React, { Fragment, useEffect, useState } from "react";
import {
  BsFillClockFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import { HiUserGroup} from "react-icons/hi";
import classes from "./RecipeServings.module.css";

const RecipeServings = (props) => {
  const recipeData = props.recipeData;
  const [servings, setServings] = useState(+recipeData.servings);

  const decrementHandler = () => {
    if (servings <= 1) return;
    setServings((prvServings) => prvServings - 1);
  };

  const incrementHandler = () => {
    setServings((prvServings) => prvServings + 1);
  };

  useEffect(() => {
    props.onUpdateServings(servings);
  }, [servings]);

  return (
    <Fragment>
      <div className={classes["servings"]}>
        <div className={classes["servings-item"]}>
          <button
            className={`${classes["icon-btn"]} ${classes["icon-btn-small"]}`}
          >
            <BsFillClockFill />
          </button>
          <p>
            {" "}
            <span>{+recipeData.cooking_time}</span> minuts
          </p>
        </div>

        <div className={classes["servings-item"]}>
          <button
            className={`${classes["icon-btn"]} ${classes["icon-btn-small"]} ${classes["icon"]}
            `}
          >
            <HiUserGroup />
          </button>
          <p>
            {" "}
            <span>{servings}</span> servings
          </p>
        </div>

        <div className={classes["servings-item"]}>
          <button
            className={`${classes["icon-btn"]} ${classes["icon-btn-small"]}
            ${classes["icon"]}`}
          >
            <BsFillDashCircleFill onClick={decrementHandler} />
          </button>
          <button
            className={`${classes["icon-btn"]} ${classes["icon-btn-small"]}
            ${classes["icon"]}`}
          >
            <BsFillPlusCircleFill onClick={incrementHandler} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeServings;
