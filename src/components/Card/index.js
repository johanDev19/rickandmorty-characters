import React from "react";

import { CardStyle } from "./CardStyle";

function Card({ characters = [] }) {
  return characters.map((character) => (
    <CardStyle key={character.id}>
      <figure>
        <img src={character.image} alt="character" />
      </figure>
      <ul>
        <li>Nombre: {character.name}</li>
        <li>Estado: {character.status}</li>
        <li>Especie: {character.species}</li>
      </ul>
    </CardStyle>
  ));
}

export default Card;
