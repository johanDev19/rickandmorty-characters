import React, { Fragment } from "react";

import { Characters } from "./../containers/Characters";
import SearchBar from "./../components/SearchBar";

export function Home() {
  return (
    <Fragment>
      <SearchBar />
      <Characters />
    </Fragment>
  );
}
