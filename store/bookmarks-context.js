import React from "react";


const BookmarksContext = React.createContext({
  bookmarks: [],
  addToBookmarks: (recipe) => {},
  removeFromBookmarks: (id) => {},
});

export default BookmarksContext;
