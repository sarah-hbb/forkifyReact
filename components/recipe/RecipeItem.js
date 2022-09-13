import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./RecipeItem.module.css";
import Card from "../ui/Card";
import BookmarkButton from "./BookmarkButton";
import BookmarksContext from "../../store/bookmarks-context";

const RecipeItem = ({ recipeData }) => {
  //console.log(recipeData);
  const bookmarksCtx = useContext(BookmarksContext);
  const bookmarks = bookmarksCtx.bookmarks;

  return (
    <Card>
      <li className={classes["recipe-item"]}>
        <Link href={`/recipe/${recipeData.id}`}>
          <div>
            <div className={classes["recipe-img"]}>
              <Image
                src={recipeData.image_url}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h1 className={classes["recipe-title"]}>{recipeData.title}</h1>
          </div>
        </Link>
        <p className={classes["recipe-description"]}>{recipeData.publisher}</p>
        <BookmarkButton btnClass={'small-btn'} recipeData={recipeData} />
      </li>
    </Card>
  );
};

export default RecipeItem;
