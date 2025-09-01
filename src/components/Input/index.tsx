import * as Styled from "./styles";
import React from "react";

export type InputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  $size?: "sm" | "md" | "lg";
  $variant?: "default" | "outlined" | "filled";
  $disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  placeholder,
  error,
  helperText,
  $size = "md",
  $variant = "default",
  $disabled = false,
  ...rest
}: InputProps) => {
  return (
    <Styled.InputContainer>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Input
        placeholder={placeholder}
        $size={$size}
        $variant={$variant}
        $error={!!error}
        $disabled={$disabled}
        disabled={$disabled}
        {...rest}
      />
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
      {helperText && !error && <Styled.HelperText>{helperText}</Styled.HelperText>}
    </Styled.InputContainer>
  );
};
