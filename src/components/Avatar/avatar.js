import React from "react";

import { Figure, Image } from "./avatarStyles";

function Avatar({ image }) {
  return (
    <Figure>
      <Image src={image} alt="character" />
    </Figure>
  );
}

export default Avatar;
