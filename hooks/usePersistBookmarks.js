// Creating react custom hook to persist bookmarks
import React,{useState,useEffect} from 'react';

const usePersistBookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
      if (typeof window !== "undefined") {
        //localStorage.clear('bookmarks')
        const storage = localStorage.getItem("bookmarks");
        if (storage) setBookmarks(JSON.parse(storage));
      }
  }, []);
  return bookmarks;
}

export default usePersistBookmarks;