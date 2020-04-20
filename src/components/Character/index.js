import React, { useEffect, useState } from 'react';

import Card from './../Card';
import { CharacterStyled } from './CharacterStyled';

import { getCharacters } from './../../services/rickandmortyService';

function Character() {
  const [characters, setCharacters] = useState({});
  
  useEffect(() => {
    getCharacters().then(res => setCharacters(res));
  }, []);

  return (
    <CharacterStyled >
      {characters.results ? <Card characters={characters.results} /> : 'cargando...'}
    </CharacterStyled>
  )
}

export default Character;