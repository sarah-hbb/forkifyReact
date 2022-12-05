import React, { useState, Fragment, useContext, useEffect } from "react";
// style
import classes from "./NewRecipeForm.module.css";
// components
import Modal from "../ui/Modal";
import IngredientForm from "./IngredientForm";
//store
import BookmarksContext from "../../store/bookmarks-context";
// icons
import { MdCloudUpload } from "react-icons/md";
import { FaRegSmileWink } from "react-icons/fa";
// Next js
import { useRouter } from "next/router";
// Assets
import { KEY } from "../../assets/config/config";
import { AJAX } from "../../utils/fetchApi";

const NewRecipeForm = () => {
  const bookmarksCtx = useContext(BookmarksContext);
  // Rendering 2 ingredients fields, and add one on every click on 'add more ingredients' button
  const initialIngredientsForm = [1, 2];
  const [ingredientsForm, setIngredientsForm] = useState(
    initialIngredientsForm
  );
  const addIngredientsHandler = () => {
    setIngredientsForm((prvIngs) => [...prvIngs, prvIngs.length + 1]);
  };
  // Getting data from forms

  ////// 1. Getting recipe data from form Recipe Data section
  const [titleInput, setTitleInput] = useState();
  const [urlInput, setUrlInput] = useState( );
  const [imageUrlInput, setImageUrlInput] = useState();
  const [publisherInput, setPublisherInput] = useState();
  const [cookingTimeInput, setCookingTimeInput] = useState();
  const [servingsInput, setServingsInput] = useState();

  ////// 2.Getting ingredients form inputs from IngredientForm component
  const [ingredients, setIngredients] = useState([]);
  const getIngredientsHandler = (ingObj) => {
    const index = ingredients.findIndex((el) => el.number === ingObj.number);
    if (index === -1) {
      setIngredients((prvIngs) => [...prvIngs, ingObj]);
    }
    if(index !== -1){
      const updatedIngredients=ingredients.filter(el=>el.number !== ingObj.number);
      setIngredients([...updatedIngredients,ingObj])
    }
  };
  //console.log(ingredients);

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const closeModalHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  //🆙 🆙 🆙 Handleling submit form 🆙 🆙 🆙
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      //console.log(inputRecipe);

      // 1️⃣ Creating recipe Object
      const recipeObj = {
        title: titleInput,
        source_url: urlInput,
        image_url: imageUrlInput,
        publisher: publisherInput,
        cooking_time: cookingTimeInput,
        servings: servingsInput,
        ingredients,
      };
      
      // 2️⃣ call api to add tecipe
      const { data } = await AJAX(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeObj.title}&key=${KEY}`,
        recipeObj
      );
      //console.log(data.recipe);

      // 3️⃣ ADD UPLOADED RECIPE TO BOOKMARKS
      bookmarksCtx.dispatchBookmarks({
        type: "ADD_TO_BOOKMSRKS",
        recipe: data.recipe,
      });

      // 4️⃣ Show Modal
      setShowModal(true);
      setTimeout(() => {
        // 5️⃣ close modal
        setShowModal(false);
        // 6️⃣ navigate to uploaded recipe page
        router.push(`/recipe/${data.recipe.id}`);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className={classes["upload-form"]}>
        <h3>{`Add your own recipe from an external url`}</h3>
        <form className={classes["form"]} onSubmit={submitHandler}>
          <div className={classes["recipe-data"]}>
            <h2> RECIPE DATA </h2>
            <div className={classes["control"]}>
              <label htmlFor="title">Recipe Title</label>
              <input
                type="text"
                required
                id="title"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </div>
            <div className={classes["control"]}>
              <label htmlFor="url">URL</label>
              <input
                type="url"
                required
                id="url"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                }}
              />
            </div>
            <div className={classes["control"]}>
              <label htmlFor="image">Recipe Image URL</label>
              <input
                type="url"
                required
                id="image"
                value={imageUrlInput}
                onChange={(e) => {
                  setImageUrlInput(e.target.value);
                }}
              />
            </div>
            <div className={classes["control"]}>
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                required
                id="publisher"
                value={publisherInput}
                onChange={(e) => {
                  setPublisherInput(e.target.value);
                }}
              />
            </div>
            <div className={classes["control"]}>
              <label htmlFor="cooking-time">Cooking Time</label>
              <input
                type="number"
                required
                id="cooking-time"
                placeholder="Minutes"
                min={1}
                value={cookingTimeInput}
                onChange={(e) => {
                  setCookingTimeInput(e.target.value);
                }}
              />
            </div>
            <div className={classes["control"]}>
              <label htmlFor="servings">Servings</label>
              <input
                type="number"
                required
                id="servings"
                min={1}
                value={servingsInput}
                onChange={(e) => {
                  setServingsInput(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={classes["recipe-ingredients"]}>
            <h2> INGREDIENTS</h2>
            <div>
              {ingredientsForm.map((form, index) => (
                <IngredientForm
                  key={index + 1}
                  number={index + 1}
                  onGetIngredient={getIngredientsHandler}
                />
              ))}
            </div>
            <button
              className={classes["add-ingredient"]}
              onClick={addIngredientsHandler}
              type="button"
            >
              add more ingredients
            </button>
          </div>

          <button className={classes["upload-btn"]} type="submit">
            <MdCloudUpload className={classes["upload-icon"]} />
            <span>Upload</span>
          </button>
        </form>
      </div>
      {showModal && (
        <Modal onCloseModal={closeModalHandler}>
          <p>
            Your recipe successfully uploaded <FaRegSmileWink /> it has been
            added to your bookmarks!
          </p>
        </Modal>
      )}
    </Fragment>
  );
};

export default NewRecipeForm;
