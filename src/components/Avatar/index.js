import React from "react";

import { Figure, Image } from "./styles";

export function Avatar({ image }) {
  return (
    <Figure>
      <Image src={image} alt="character" />
    </Figure>
  );
}
