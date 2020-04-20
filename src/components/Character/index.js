import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Card from './../Card'

const CharacterStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1.5rem;
  grid-row-gap: .5em;
`

function Character() {
  const [characters, setCharacters] = useState({});
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(res => setCharacters(res.data));
  }, []);

  return (
    <CharacterStyled >
      {characters.results && <Card characters={characters.results} />}
    </CharacterStyled>
  )
}

export default Character;