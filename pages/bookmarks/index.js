// domain.com/bookmarks
import React, { useContext } from "react";
import RecipeList from '../../components/recipe/RecipeList'

import BookmarksContext from "../../store/bookmarks-context";

const Bookmarks = (props) => {
  const bookmarksCtx = useContext(BookmarksContext);
  const bookmarks = bookmarksCtx.bookmarks;
  console.log(bookmarks);
   return <RecipeList recipes={bookmarks} />;
};

export default Bookmarks;


