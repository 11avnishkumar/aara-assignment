import React from "react";

const Button = ({ defaultButtonType, className, buttonText, onClick }) => {
  return (
    <button
      type={defaultButtonType ? "submit" : "button"}
      className={className}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
