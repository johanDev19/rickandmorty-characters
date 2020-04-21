import React, { useEffect, useContext } from "react";

import Card from "./../Card";
import { CharacterStyled } from "./CharacterStyled";

import { getCharacters } from "./../../services/rickandmortyService";
import { Context } from "./../../Store";

function Character() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getCharacters().then((res) =>
      dispatch({
        type: "SET_CHARACTERS",
        payload: res,
      })
    );
  }, [dispatch]);

  return (
    <CharacterStyled>
      {state.characters ? (
        <Card characters={state.characters.results} />
      ) : (
        "cargando..."
      )}
    </CharacterStyled>
  );
}

export default Character;
