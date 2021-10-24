import React from "react";

import CardList from "../../components/cardList";
import { CharactersContainer } from "./characterListStyles";
import useCharacters from "../../hook/useCharacters";

function CharacterList() {
  const { characters } = useCharacters();

  return (
    <CharactersContainer>
      <CardList data={characters} />
    </CharactersContainer>
  );
}

export default CharacterList;
