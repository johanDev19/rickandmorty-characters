import React from "react";

import Label from "./../Label";
import { Avatar } from "../Avatar";
import { CardStyle, CardContent } from "./styles";

export function Cards({ characters = [] }) {
  return characters.map(character => (
    <CardStyle key={character.id}>
      <Avatar image={character.image} />
      <CardContent>
        <Label title="name" content={character.name} />
        <Label title="status" content={character.status} />
        <Label title="species" content={character.species} />
      </CardContent>
    </CardStyle>
  ));
}
