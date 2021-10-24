import React, { useContext } from "react";

import { SearchBarStyle } from "./SearchBarStyles";
import { Button } from "../Ui/Button";
import ApplicationContext from "../../context/ApplicationContext";

function SearchBar() {
  const {
    searchValue,
    actions: { updateSearchValue },
  } = useContext(ApplicationContext);

  const handleSubmit = () => {};

  const resetSearchValue = () => updateSearchValue("");

  const handleOnChange = (e) => updateSearchValue(e.target.value);

  return (
    <SearchBarStyle>
      <input onChange={handleOnChange} value={searchValue} />
      <Button label="Buscar" handleOnClick={handleSubmit} btn="primary" />
      {searchValue && (
        <Button btn="danger" handleOnClick={resetSearchValue} label="limpiar" />
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
