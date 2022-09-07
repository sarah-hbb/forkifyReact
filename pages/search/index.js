// domain.com/search

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchList from "../../components/search/SearchList";
import NoResultForSearch from "../../components/search/NoResultForSearch";

import { AJAX } from "../../utils/fetchApi";
import { API_URL, KEY } from "../../assets/config/config";
import Modal from "../../components/ui/Modal";

const searchPage = (props) => {
  const router = useRouter();
  const searchQuery = router.query;
  //console.log(searchQuery.query);
  const { recipes } = props.recipes;
  //console.log(recipes);
  const [showModal, setShowModal] = useState(false);
  const [emptyQuery,setEmptyQuery]=useState(false);
  const[noResult,setNoResult]=useState(false);
  const closeModalHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    setEmptyQuery(false);
    setNoResult(false);
  };

  useEffect(()=>{
    if(searchQuery.query === "" ){
      setShowModal(true);
      setEmptyQuery(true);
    };
    if(recipes.length === 0 && searchQuery.query !== ""){
      setShowModal(true);
      setNoResult(true)
    }
  },[searchQuery])

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
      <SearchList searchRecipes={recipes} />
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
