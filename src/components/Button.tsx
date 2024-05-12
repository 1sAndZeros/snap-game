import React from "react";
import StyledButton from "@/styles/Button";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: ButtonProps) => (
  <StyledButton role="button" onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
