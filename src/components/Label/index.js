import React from 'react';

import { LabelStyle } from './labelStyle';

function Label({ title, content }) {
  return (
    <LabelStyle>
      <span className="title">{title}:</span>
      <span className="content">{content}</span>
    </LabelStyle>
  );
}

export default Label;
