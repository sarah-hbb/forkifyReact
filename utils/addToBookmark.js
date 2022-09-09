import { FIREBASE_DOMAIN } from "../assets/config/config";

// Post the bookmark recipe to firebase database
export const addToBookmark = async (recipeData) => {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/bookmarks.json`, {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("posting data to firebase denied");
  }
};
