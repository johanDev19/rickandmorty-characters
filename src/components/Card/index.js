import React from "react";
import styled from 'styled-components';

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
  padding: 20px;
  box-sizing: border-box;

  figure {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 10px 20px #ccc;
    margin: 0px;

    img {
      width: 100%;
    }
  }
`

function Card({characters}) {
  return characters.map(character => (
    <CardStyled>
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
