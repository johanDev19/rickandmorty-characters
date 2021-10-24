import React from "react";

import { LabelStyle, Title, Content } from "./labelStyles";

function Label({ title, content }) {
  return (
    <LabelStyle>
      <Title className="title">{title}:</Title>
      <Content className="content">{content}</Content>
    </LabelStyle>
  );
}

export default Label;
