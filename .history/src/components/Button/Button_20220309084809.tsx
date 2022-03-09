import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
  console.log('This package works:' , props.label);
};

export default Button;
