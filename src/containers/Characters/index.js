import React, { useEffect, useContext } from "react";

import { Cards } from "./../../components/Cards";
import { CharactersContainer } from "./styles";

import { getCharacters } from "./../../services/rickandmortyService";
import { Context } from "./../../Store";

export function Characters() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getCharacters(state.searchValue).then((characters) =>
      dispatch({
        type: "SET_CHARACTERS",
        payload: characters,
      })
    );
  }, [dispatch, state.searchValue]);

  return (
    <CharactersContainer>
      {state.characters ? (
        <Cards characters={state.characters.results} />
      ) : (
        "cargando..."
      )}
    </CharactersContainer>
  );
}
