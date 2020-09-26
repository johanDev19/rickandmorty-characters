import React from "react";

export const Button = ({
  label = "button",
  btn = "primary",
  handleOnClick = () => {},
}) => {
  return (
    <button className={btn} type="button" onClick={handleOnClick}>
      {label}
    </button>
  );
};
