// domain.com/search

import React, { Fragment } from "react";
import { useRouter } from "next/router";
import SearchList from "../../components/search/SearchList";
import NoResultForSearch from "../../components/search/NoResultForSearch";

import { AJAX } from "../../utils/fetchApi";
import { API_URL, KEY } from "../../assets/config/config";

const searchPage = (props) => {
  const router = useRouter();
  const searchQuery = router.query;
  //console.log(searchQuery.query);
  const { recipes } = props.recipes;
  //console.log(recipes);

  return (
    <Fragment>
      {searchQuery.query === "" && (
        <p> Please enter a food to see related recipes</p>
      )}
      {(recipes.length === 0 && searchQuery.query !== "") && <NoResultForSearch />}
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
 