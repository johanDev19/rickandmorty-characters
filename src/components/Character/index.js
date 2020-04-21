import React, { useEffect, useContext } from 'react';

import Card from './../Card';
import { CharacterStyle } from './CharacterStyle';

import { getCharacters } from './../../services/rickandmortyService';
import { Context } from './../../Store';

function Character() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getCharacters(state.searchValue).then((res) =>
      dispatch({
        type: 'SET_CHARACTERS',
        payload: res,
      }),
    );
  }, [dispatch, state.searchValue]);

  return (
    <CharacterStyle>
      {state.characters ? (
        <Card characters={state.characters.results} />
      ) : (
        'cargando...'
      )}
    </CharacterStyle>
  );
}

export default Character;
