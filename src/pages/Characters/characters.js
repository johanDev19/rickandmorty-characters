import React, { Fragment } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CharacterList from "../../containers/characterList";

function Characters() {
  return (
    <Fragment>
      <SearchBar />
      <CharacterList />
    </Fragment>
  );
}

export default Characters;
