import * as Styled from "./styles";
import React, { useId } from "react";

export type CheckboxProps = {
  label?: string;
  error?: string;
  helperText?: string;
  $disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  label,
  error,
  helperText,
  $disabled = false,
  ...rest
}: CheckboxProps) => {
  const id = useId();

  return (
    <Styled.CheckboxContainer $disabled={$disabled}>
      <Styled.Checkbox
        type="checkbox"
        id={id}
        disabled={$disabled}
        $error={!!error}
        {...rest}
      />
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
      {helperText && !error && <Styled.HelperText>{helperText}</Styled.HelperText>}
    </Styled.CheckboxContainer>
  );
};
