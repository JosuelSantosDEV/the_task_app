
import * as Styled from "./styles";
import React from "react";

export type ButtonMenuProps = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  $size?: "sm" | "md" | "lg"
  $variant?: "siple" | "default";
  $center?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonMenu = ({
  title,
  children,
  disabled = false,
  $size,
  $variant = "default",
  $center = true,
  ...rest
}: ButtonMenuProps) => {
  return (
    <Styled.ButtonContainer
      $size={$size}
      $variant={$variant}
      $center={$center}
      disabled={disabled}
    >
      <Styled.Container
        $size={$size}
        $variant={$variant}
        $center={$center}
        disabled={disabled}
        {...rest}
      >
        {title}{children ? children : ""} 
      </Styled.Container>
    </Styled.ButtonContainer>
  );
};
