import React, { useEffect, useState } from "react";

import { Cards } from "./../../components/Cards";
import { CharactersContainer } from "./styles";

import { getCharacterByName } from "./../../services/rickandmortyService";

export function CharacterList() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    getCharacterByName().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  return (
    <CharactersContainer>
      {characters ? <Cards characters={characters} /> : "cargando..."}
    </CharactersContainer>
  );
}
