import React from "react";

interface props {
  placeholder: string;
  className: string;
}

const Input: React.FC<props> = (props) => {
  return <input className={props.className} placeholder={props.placeholder} />;
};

export default Input;
