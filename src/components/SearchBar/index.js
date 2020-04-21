import React, { useContext, useState } from 'react';
import { Context } from './../../Store';
import { SearchBarStyle } from './searchBarStyle';

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = () => {
    dispatch({
      type: 'SET_SEARCH_VALUE',
      payload: searchValue,
    });
  };

  const resetSearchValue = () => {
    dispatch({ type: 'REMOVE_SEARCH_VALUE' });
    setSearchValue('');
  };

  return (
    <SearchBarStyle>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="primary" type="button" onClick={handleSubmit}>
        Buscar
      </button>
      {state.searchValue && (
        <button className="danger" type="button" onClick={resetSearchValue}>
          Limpiar
        </button>
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
