import React, { Fragment,useState } from "react";
import classes from "./RecipePictureSection.module.css";

import Image from "next/image";
import { BsSuitHeartFill, BsSuitHeart, BsPerson } from "react-icons/bs";


const RecipePictureSection = (props) => {
    const recipeData =props.recipeData;
    const uploadByYou = props.uploadByYou;
    
    const [isFav, setIsFave] = useState(false);
    const favHandler = (e) => {
      e.preventDefault();
        isFav ? setIsFave(false) : setIsFave(true);
      };
    //console.log(props.recipeData);
  return (
    <Fragment>
      <h1 className={classes["recipe-title"]}>{recipeData.title}</h1>
      <div className={classes["recipe-image-section"]}>
        <div className={classes["recipe-image"]}>
          <Image src={recipeData.image_url} layout="fill" objectFit="cover" />
        </div>
        <div className={classes["image-icon-btns"]}>
          <button className={classes[`icon-btn`]}>
            {uploadByYou && <BsPerson className={classes["icon"]} />}
          </button>

          <button className={classes["icon-btn"]} onClick={favHandler}>
            {!isFav && <BsSuitHeart className={classes["icon"]}/>}
            {isFav && <BsSuitHeartFill className={classes["icon"]}/>}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipePictureSection;
