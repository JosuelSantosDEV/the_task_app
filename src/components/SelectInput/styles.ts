import styled, { css } from "styled-components";

type StyleProps = {
  $size?: "sm" | "md" | "lg";
  $variant?: "default" | "outlined" | "filled";
  $error?: boolean;
  $disabled?: boolean;
};

export const SelectContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.sizes.sm};
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.primary};
`;

export const SelectWrapper = styled.div<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Select = styled.select<StyleProps>`
  width: 100%;
  border: none;
  outline: none;
  font-family: ${(p) => p.theme.fonts.primary};
  color: ${(p) => p.theme.colors.text};
  background-color: transparent;
  transition: all 0.2s ease;
  appearance: none;
  cursor: pointer;

  ${({ $size }) => {
    switch ($size) {
      case "lg": {
        return css`
          height: ${(p) => p.theme.sizes["2xl"]};
          font-size: 18px;
          padding: 0 ${(p) => p.theme.sizes.md};
          padding-right: ${(p) => p.theme.sizes["2xl"]};
        `;
      }
      case "md": {
        return css`
          height: ${(p) => p.theme.sizes.xl};
          font-size: 16px;
          padding: 0 ${(p) => p.theme.sizes.md};
          padding-right: ${(p) => p.theme.sizes.xl};
        `;
      }
      case "sm": {
        return css`
          height: ${(p) => p.theme.sizes.lg};
          font-size: 14px;
          padding: 0 ${(p) => p.theme.sizes.sm};
          padding-right: ${(p) => p.theme.sizes.lg};
        `;
      }
      default: {
        return css`
          height: ${(p) => p.theme.sizes.xl};
          font-size: 16px;
          padding: 0 ${(p) => p.theme.sizes.md};
          padding-right: ${(p) => p.theme.sizes.xl};
        `;
      }
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outlined": {
        return css`
          border: 2px solid ${theme.colors.gray};
          border-radius: 8px;
          background-color: transparent;

          &:focus {
            border-color: ${theme.colors.primary};
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      }
      case "filled": {
        return css`
          border: none;
          border-radius: 8px;
          background-color: ${theme.colors.secondary};

          &:focus {
            background-color: ${theme.colors.tertiary};
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      }
      default: {
        return css`
          border: 1px solid ${theme.colors.gray};
          border-radius: 6px;
          background-color: ${theme.colors.background};

          &:focus {
            border-color: ${theme.colors.primary};
            box-shadow: 0 0 0 2px ${theme.colors.primary}20;
          }
        `;
      }
    }
  }}

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.red} !important;
      box-shadow: 0 0 0 2px ${theme.colors.red}20 !important;

      &:focus {
        border-color: ${theme.colors.red} !important;
        box-shadow: 0 0 0 3px ${theme.colors.red}20 !important;
      }
    `}

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${theme.colors.gray}20;
    `}

  option {
    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
    padding: ${(p) => p.theme.sizes.sm};
  }
`;

export const ChevronIcon = styled.div<StyleProps>`
  position: absolute;
  right: ${(p) => p.theme.sizes.md};
  pointer-events: none;
  color: ${(p) => p.theme.colors.gray};
  transition: transform 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "lg": {
        return css`
          width: 20px;
          height: 20px;
        `;
      }
      case "md": {
        return css`
          width: 18px;
          height: 18px;
        `;
      }
      case "sm": {
        return css`
          width: 16px;
          height: 16px;
        `;
      }
      default: {
        return css`
          width: 18px;
          height: 18px;
        `;
      }
    }
  }}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.red};
  font-family: ${(p) => p.theme.fonts.primary};
  margin-top: -4px;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.gray};
  font-family: ${(p) => p.theme.fonts.primary};
  margin-top: -4px;
`;
