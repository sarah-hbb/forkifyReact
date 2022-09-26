import React, { Fragment, useState, useContext } from "react";
import classes from "./BookmarkButton.module.css";
import { BsSuitHeartFill, BsSuitHeart, BsPerson } from "react-icons/bs";
import BookmarksContext from "../../store/bookmarks-context";

const BookmarkButton = (props) => {
  const recipeData = props.recipeData;
  // bookmarksCtx contains bookmarks andbookmarksDispatch
  const bookmarksCtx = useContext(BookmarksContext);
  const bookmarks = bookmarksCtx.bookmarks;
  const [isBookmarked, setIsBookmarked] = useState(()=>{
    if(bookmarks.some(bookmark=>bookmark.id === recipeData.id)) {return true}else{return false};
  });

  const bookmarkHandler = (e) => {
    e.preventDefault();
    //console.log(recipeData);
    isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);

    // 💖 add the recipe to local storage bookmarks
    if (!isBookmarked) {
      bookmarksCtx.dispatchBookmarks({
        type: 'ADD_TO_BOOKMSRKS',
        recipe: recipeData ,
      });
    }
    // ❌ UnBookmark the recipe and remove it from bookmarks local storage
    else {
      bookmarksCtx.dispatchBookmarks({
        type: "REMOVE_FROM_BOOKMARKS",
        id: recipeData.id,
      });
    }
  };
  // console.log(bookmarksCtx.bookmarks);
  // console.log(isBookmarked);

  return (
    <Fragment>
      <button className={classes["icon-btn"]} onClick={bookmarkHandler}>
        {!isBookmarked && <BsSuitHeart className={`${classes["icon"]} ${props.btnClass? classes[props.btnClass] : ''}`} />}
        {isBookmarked && <BsSuitHeartFill className={`${classes["icon"]} ${props.btnClass? classes[props.btnClass] : ''}`} />}
      </button>
    </Fragment>
  );
};

export default BookmarkButton;

// let bookmarks = [];
// // persisiting bookmark for every change in bookmark
// useEffect(() => {
//   if (typeof window !== "undefined") {
//     //localStorage.clear('bookmarks')
//     const storage = localStorage.getItem("bookmarks");
//     if (storage) bookmarks = JSON.parse(storage);
//   }
//   if (bookmarks.some((bookmark) => bookmark.id === recipeData.id)) setIsBookmarked(true);

//   console.log(isBookmarked);
// }, [bookmarks,isBookmarked]);
// const bookmarkHandler = (e) => {
//   e.preventDefault();
//   //console.log(recipeData);
//   isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);

//   // 💖 add the recipe to local storage bookmarks
//   if (!isBookmarked) {
//     // 🪟 if(typeof window !== "undefined") to access window and document in next js
//     bookmarks.push({ ...recipeData, isBookmarked: true });
//     if (typeof window !== "undefined") {
//       localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//       console.log(bookmarks);
//     }
//   }
//   // ❌ UnBookmark the recipe and remove it from bookmarks local storage
//   else {
//     const deletingIndex = bookmarks.findIndex(
//       (el) => el.id === recipeData.id
//     );
//     bookmarks.splice(deletingIndex, 1);
//     if (typeof window !== "undefined") {
//       localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//     }
//     console.log(bookmarks);
//     // }
//   }

// code below is use when add the recipe to firebase 🔥 database
//import { addToBookmark } from "../../utils/addToBookmark";
// addToBookmark({ ...recipeData, bookmarked: true });
