import React, { Fragment } from "react";

import { Characters } from "./../components/Characters";
import SearchBar from "./../components/SearchBar";

export function Home() {
  return (
    <Fragment>
      <SearchBar />
      <Characters />
    </Fragment>
  );
}
