import React from "react";
import PropTypes from "prop-types";

import Label from "../label";
import Avatar from "../avatar";
import { CardStyle, CardContent } from "./cardListStyles";

function CardList({ data }) {
  return data.map((character) => (
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

CardList.prototype = {
  data: PropTypes.array.isRequired,
};

CardList.defaultProps = {
  data: [],
};

export default CardList;
