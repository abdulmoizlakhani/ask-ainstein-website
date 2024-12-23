// components/Button.js
import React from "react";

const Button = ({
  variant,
  children,
}: {
  variant: "signUp" | "signIn";
  children: React.ReactNode;
}) => {
  const baseStyle =
    "w-[110px] h-[50px] flex justify-center items-center rounded-[10px] font-semibold";
  const variants = {
    signUp: `${baseStyle} text-primary-500 border-primary-500 border-2`,
    signIn: `${baseStyle} bg-primary-500 text-secondary`,
  };

  return <button className={`${variants[variant]}`}>{children}</button>;
};

export default Button;
