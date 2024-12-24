import React from "react";

interface ButtonProps {
  variant?: "outlined" | "filled" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  shadow?: boolean;
}

const classes = {
  outlined: "btn-outlined",
  filled: "btn-filled",
  large: "btn-large",
};

const Button = ({
  variant = "filled",
  shadow,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${classes[variant]} ${shadow && "drop-shadow-md"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
