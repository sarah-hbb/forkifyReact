export const createRecipeObject = (recipe,bookmarks) => {
    if(bookmarks.some(bookmark=>bookmark.id === recipeData.id)){
        recipe.isBookmarked = true
    }else {recipeData.isBookmarked=false}
  return {
    ...recipeData,
    isBookmarked: false,
    key: "",
  };
};
