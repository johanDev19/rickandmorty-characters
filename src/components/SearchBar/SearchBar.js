import React, { useContext } from "react";

import { SearchBarStyle } from "./searchBarStyles";
import { Button } from "../ui/button";
import ApplicationContext from "../../context/ApplicationContext";

function SearchBar() {
  const {
    searchValue,
    actions: { updateSearchValue },
  } = useContext(ApplicationContext);

  const resetSearchValue = () => updateSearchValue("");

  const handleOnChange = (e) => updateSearchValue(e.target.value);

  return (
    <SearchBarStyle>
      <input
        onChange={handleOnChange}
        value={searchValue}
        placeholder="Escribe el nombre del personaje"
      />
      {searchValue && (
        <Button btn="danger" handleOnClick={resetSearchValue} label="limpiar" />
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
