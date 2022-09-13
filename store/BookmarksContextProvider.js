import React, { useReducer, useEffect } from "react";
import BookmarksContext from "./bookmarks-context";
import { bookmarksReducer } from "../reducers/bookmarksReducer";

const BookmarksContextProvider = (props) => {
  const [bookmarks, dispatchBookmarks] = useReducer(
    bookmarksReducer,
    []
    ,
    () => {
      let localData;
      if (typeof window !== "undefined") {
        localData = localStorage.getItem("bookmarks");
      }
      return localData ? JSON.parse(localData) : [];
      //;
    }
  );
  useEffect(() => {
    // 🪟 if(typeof window !== "undefined") to access window and document in next js
    if (typeof window !== "undefined") {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, dispatchBookmarks }}>
      {props.children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContextProvider;
