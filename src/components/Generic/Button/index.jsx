import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  type,
  onClick,
  width,
  height,
  disabled,
}) => {
  return (
    <Container
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
      height={height}
    >
      {children || "Profile"}
    </Container>
  );
};

export default Button;
