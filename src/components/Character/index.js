import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCharacters } from './../../services/rickandmortyService';

import Card from './../Card';

const CharacterStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1.5rem;
  grid-row-gap: .5em;
`

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