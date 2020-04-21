import React from "react";

import { CardStyled } from "./CardStyled";

function Card({ characters = [] }) {
  return characters.map((character) => (
    <CardStyled key={character.id}>
      <figure>
        <img src={character.image} alt="character" />
      </figure>
      <ul>
        <li>Nombre: {character.name}</li>
        <li>Estado: {character.status}</li>
        <li>Especie: {character.species}</li>
      </ul>
    </CardStyled>
  ));
}

export default Card;
