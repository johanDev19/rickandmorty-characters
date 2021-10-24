import React, { Fragment } from "react";

import { CharacterList } from "./../containers/CharacterList";
import SearchBar from "./../components/SearchBar";

function Characters() {
  return (
    <Fragment>
      {/* <SearchBar /> */}
      <CharacterList />
    </Fragment>
  );
}

export default Characters;
