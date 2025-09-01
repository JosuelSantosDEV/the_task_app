import * as Styled from "./styles";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type SelectInputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  $size?: "sm" | "md" | "lg";
  $variant?: "default" | "outlined" | "filled";
  $disabled?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">;

export const SelectInput = ({
  label,
  placeholder,
  error,
  helperText,
  options,
  $size = "md",
  $variant = "default",
  $disabled = false,
  ...rest
}: SelectInputProps) => {
  return (
    <Styled.SelectContainer>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.SelectWrapper>
        <Styled.Select
          $size={$size}
          $variant={$variant}
          $error={!!error}
          $disabled={$disabled}
          disabled={$disabled}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </Styled.Select>
        <Styled.ChevronIcon $size={$size}>
          <FaChevronDown />
        </Styled.ChevronIcon>
      </Styled.SelectWrapper>
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
      {helperText && !error && <Styled.HelperText>{helperText}</Styled.HelperText>}
    </Styled.SelectContainer>
  );
};
