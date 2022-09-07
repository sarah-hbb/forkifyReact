// context to store search query
import React from "react";
//updateServingsContext is object that contains a component
const updateServingsContext = React.createContext({
  updatedQuantity: "",
  updatedServingsToOriginalRate: ()=>{},
  setUpdatedQuantity: () => {},
});

export default updateServingsContext;
