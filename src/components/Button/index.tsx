
import * as Styled from "./styles";
import React from "react";

export type ButtonMenuProps = {
  title?: string;
  disable?: boolean;
  children?: React.ReactNode;
  $size?: "sm" | "md" | "lg"
  $variant?: "simple" | "default";
  $center?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  title,
  children,
  disable = false,
  $size,
  $variant = "default",
  $center = true,
  ...rest
}: ButtonMenuProps) => {
  return (
    <Styled.Button
      $size={$size}
      $variant={$variant}
      $center={$center}
      disabled={disable}
      {...rest}
    >
      {title} {children ? children : ""} 
    </Styled.Button>
  );
};
