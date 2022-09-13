// domain.com/search

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import RecipeList from "../../components/recipe/RecipeList";
import NoResultForSearch from "../../components/search/NoResultForSearch";
import Modal from "../../components/ui/Modal";

import { AJAX } from "../../utils/fetchApi";
import { API_URL, KEY } from "../../assets/config/config";

const searchPage = (props) => {
  //console.log(bookmarks);
  const router = useRouter();
  const searchQuery = router.query;

  const { recipes } = props.recipes;

  //console.log(recipes);
  const [showModal, setShowModal] = useState(false);
  const [emptyQuery, setEmptyQuery] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const closeModalHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    setEmptyQuery(false);
    setNoResult(false);
  };

  useEffect(() => {
    if (searchQuery.query === "") {
      setShowModal(true);
      setEmptyQuery(true);
    }
    if (recipes.length === 0 && searchQuery.query !== "") {
      setShowModal(true);
      setNoResult(true);
    }
  }, [searchQuery]);

  return (
    <Fragment>
      {showModal && emptyQuery && (
        <Modal onCloseModal={closeModalHandler}>
          <p> Please enter a food to see related recipes</p>
        </Modal>
      )}
      {showModal && noResult && (
        <Modal onCloseModal={closeModalHandler}>
          <NoResultForSearch />
        </Modal>
      )}
      <RecipeList recipes={recipes} />
    </Fragment>
  );
};

export async function getServerSideProps({ query }) {
  // fetch data from api upon request [search request]
  const data = await AJAX(`${API_URL}?search=${query.query}&key=${KEY}`);
  //${API_URL}?search=${query}&key=${KEY}`)
  return {
    props: {
      recipes: data?.data,
    },
  };
}

export default searchPage;
