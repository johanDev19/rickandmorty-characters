import React from 'react';

import Label from './../Label';

import { CardStyle, CardContent } from './CardStyle';

function Card({ characters = [] }) {
  return characters.map((character) => (
    <CardStyle key={character.id}>
      <figure>
        <img src={character.image} alt="character" />
      </figure>
      <CardContent>
        <Label title="name" content={character.name} />
        <Label title="status" content={character.status} />
        <Label title="species" content={character.species} />
      </CardContent>
    </CardStyle>
  ));
}

export default Card;
