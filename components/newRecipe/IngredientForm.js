import React, { useState } from "react";
import classes from "./IngredientForm.module.css";

const IngredientForm = (props) => {
  const number = props.number - 1;
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [description, setDescription] = useState();

  const onBlureHandler = () => {
    const ingredientObject = { number,quantity, unit, description };
    if (description) {
      props.onGetIngredient(ingredientObject)
    }
  };

  return (
    <div className={classes["ingredients"]}>
      <label htmlFor="ingredient">{`Ingredient ${props.number}`}</label>
      <input
        className={classes["quantity"]}
        type="number"
        id="quantity"
        min={1}
        step="0.5"
        placeholder="e.g: 1.5"
        onChange={(e) => {
          e.preventDefault();
          setQuantity(e.target.value);
        }}
      />
      <input
        className={classes["unit"]}
        type="text"
        id="unit"
        placeholder="tbs,cup,kg,..."
        onChange={(e) => {
          e.preventDefault();
          setUnit(e.target.value);
        }}
      />
      <input
        className={classes["description"]}
        type="text"
        required
        id="description"
        placeholder="e.g: diced onion"
        onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value);
        }}
        onBlur={onBlureHandler}
      />
    </div>
  );
};

export default IngredientForm;

// const qref = useCallback(
//   (input) => {
//     setIngredient(+input.value);
//   },
//   [],
//   )

//   useEffect(() => {
//     // const quantity = quantityRef.current.value;
//     // const unit = unitRef.current.value;
//     // const description = descriptionRef.current.value;
//     //console.log(ingredient);
//     props.onGetIngredient(ingredient);

// }, [ingredient]);
