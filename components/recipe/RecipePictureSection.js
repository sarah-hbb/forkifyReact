import React, { Fragment} from "react";
import classes from "./RecipePictureSection.module.css";
import BookmarkButton from "./BookmarkButton";

import Image from "next/image";

import { BsPerson } from "react-icons/bs";

const RecipePictureSection = (props) => {
  const recipeData = props.recipeData;
  const uploadByYou = recipeData.key;

  return (
    <Fragment>
      <h1 className={classes["recipe-title"]}>{recipeData.title}</h1>
      <div className={classes["recipe-image-section"]}>
        <div className={classes["recipe-image"]}>
          <Image
            src={recipeData.image_url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={classes["image-icon-btns"]}>
          <button className={classes[`icon-btn`]}>
            {uploadByYou && <BsPerson className={classes["icon"]} />}
          </button>

          <BookmarkButton recipeData={recipeData} />
        </div>
      </div>
    </Fragment>
  );
};

export default RecipePictureSection;
