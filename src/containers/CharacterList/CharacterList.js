import React, { useEffect, useState } from "react";

import CardList from "../../components/cardList";
import { CharactersContainer } from "./characterListStyles";

import { getCharacterByName } from "../../services/rickandmortyService";
import ApplicationContext from "../../context/ApplicationContext";

function CharacterList() {
  const [characters, setCharacters] = useState();
  const { searchValue } = React.useContext(ApplicationContext);

  useEffect(() => {
    getCharacterByName(searchValue).then((data) => {
      setCharacters(data.results);
    });
  }, [searchValue]);

  return (
    <CharactersContainer>
      <CardList data={characters} />
    </CharactersContainer>
  );
}

export default CharacterList;
