
import * as Styled from "./styles";
import React from "react";

export type ButtonMenuProps = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonMenu = ({
  title,
  children,
  disabled = false,
  ...rest
}: ButtonMenuProps) => {
  return (
    <Styled.ButtonContainer
      disabled={disabled}
    >
      <Styled.Container
        disabled={disabled}
        {...rest}
      >
        {children ? children : ""} {title}
      </Styled.Container>
    </Styled.ButtonContainer>
  );
};
