import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCharacterByName } from "../services/rickandmortyService";

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const { characterName } = useParams();

  useEffect(() => {
    getCharacterByName(characterName).then((data) => {
      setCharacters(data.results);
    });
  }, [characterName]);

  return {
    characters,
  };
}

export default useCharacters;
