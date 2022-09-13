export const bookmarksReducer =(state,action)=>{
 if (action.type === 'ADD_TO_BOOKMSRKS') {
    return [...state,action.recipe]};
 if(action.type ==='REMOVE_FROM_BOOKMARKS'){return state.filter(recipe => recipe.id !== action.id)}
}