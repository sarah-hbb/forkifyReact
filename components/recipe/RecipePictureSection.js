import React, { Fragment, useEffect, useState } from "react";
import classes from "./RecipePictureSection.module.css";

import Image from "next/image";

import { BsSuitHeartFill, BsSuitHeart, BsPerson } from "react-icons/bs";

const RecipePictureSection = (props) => {
  const recipeData = props.recipeData;
  const uploadByYou = props.uploadByYou;
  const [isBookmarked, setIsBookmarked] = useState(false);

  let bookmarks = [];
  // persisiting bookmark for every change in bookmark
  useEffect(() => {
    if (typeof window !== "undefined") {
      //localStorage.clear('bookmarks')
      const storage = localStorage.getItem("bookmarks");
      if (storage) bookmarks = JSON.parse(storage);
    }
  }, [bookmarks]);

  const bookmarkHandler = (e) => {
    e.preventDefault();
    //console.log(recipeData);
    isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);
    // 💖 add the recipe to local storage bookmarks
    if (!isBookmarked) {
      // 🪟 if(typeof window !== "undefined") to access window and document in next js
      bookmarks.push({ ...recipeData, isBookmarked: true });
      if (typeof window !== "undefined") {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        console.log(bookmarks);
      }
    }
    // ❌ UnBookmark the recipe and remove it from bookmarks local storage
    else {
      const deletingIndex = bookmarks.findIndex(
        (el) => el.id === recipeData.id
      );
      bookmarks.splice(deletingIndex, 1);
      if (typeof window !== "undefined") {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      }
      console.log(bookmarks);
      // }
    }

    // code below is use when add the recipe to firebase 🔥 database
    //import { addToBookmark } from "../../utils/addToBookmark";
    // addToBookmark({ ...recipeData, bookmarked: true });
  };

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

          <button className={classes["icon-btn"]} onClick={bookmarkHandler}>
            {!isBookmarked && <BsSuitHeart className={classes["icon"]} />}
            {isBookmarked && <BsSuitHeartFill className={classes["icon"]} />}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipePictureSection;
