import React from "react";
import styled from 'styled-components';

const CardStyled = styled.article`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
    
  figure {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 10px 20px #ccc;
    
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
        <li>{character.name}</li>
        <li>{character.status}</li>
        <li>{character.species}</li>
      </ul>
    </CardStyled>
  ));
} 

export default Card;
