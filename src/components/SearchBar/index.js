import React, { useContext, useState } from "react";
import { Context } from "./../../Store";
import { SearchBarStyle } from "./styles";
import { Button } from "../Ui/Button";

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = () => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: searchValue,
    });
  };

  const resetSearchValue = () => {
    dispatch({ type: "REMOVE_SEARCH_VALUE" });
    setSearchValue("");
  };

  return (
    <SearchBarStyle>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button label="Buscar" handleOnClick={handleSubmit} btn="primary" />
      {state.searchValue && (
        <Button btn="danger" handleOnClick={resetSearchValue} label="limpiar" />
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
