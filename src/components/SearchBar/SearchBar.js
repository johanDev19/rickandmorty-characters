import React from "react";
import { useHistory, useParams } from "react-router";

import { SearchBarStyle } from "./searchBarStyles";
import { Button } from "../ui/button";

function SearchBar() {
  const history = useHistory();
  const { characterName } = useParams();
  const [searchValue, setSearchValue] = React.useState(characterName || "");
  const resetSearchValue = () => setSearchValue("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    history.push(e.target.value);
  };

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
