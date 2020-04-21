import React, { useContext, useState } from "react";
import { Context } from "./../../Store";
import { SearchBarStyle } from "./searchBarStyle";

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = () => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: searchValue,
    });
  };

  return (
    <SearchBarStyle>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSubmit} type="button">
        Buscar
      </button>
    </SearchBarStyle>
  );
}

export default SearchBar;
