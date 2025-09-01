import styled, { css } from "styled-components";

type StyleProps = {
  $size?: "sm" | "md" | "lg";
  $variant?: "default" | "outlined" | "filled";
  $error?: boolean;
  $disabled?: boolean;
};

export const InputContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.sizes.sm};
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.primary};
`;

export const Input = styled.input<StyleProps>`
  border: none;
  outline: none;
  font-family: ${(p) => p.theme.fonts.primary};
  color: ${(p) => p.theme.colors.text};
  background-color: transparent;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${(p) => p.theme.colors.gray};
    opacity: 0.7;
  }

  ${({ $size }) => {
    switch ($size) {
      case "lg": {
        return css`
          height: ${(p) => p.theme.sizes["2xl"]};
          font-size: 18px;
          padding: 0 ${(p) => p.theme.sizes.md};
        `;
      }
      case "md": {
        return css`
          height: ${(p) => p.theme.sizes.xl};
          font-size: 16px;
          padding: 0 ${(p) => p.theme.sizes.md};
        `;
      }
      case "sm": {
        return css`
          height: ${(p) => p.theme.sizes.lg};
          font-size: 14px;
          padding: 0 ${(p) => p.theme.sizes.sm};
        `;
      }
      default: {
        return css`
          height: ${(p) => p.theme.sizes.xl};
          font-size: 16px;
          padding: 0 ${(p) => p.theme.sizes.md};
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
          background-color: ${theme.colors.secundary};

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

  ${({ $error }) =>
    $error &&
    css`
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 2px #ef444420 !important;

      &:focus {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px #ef444420 !important;
      }
    `}

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${theme.colors.gray}20;
    `}
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ef4444;
  font-family: ${(p) => p.theme.fonts.primary};
  margin-top: -4px;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.gray};
  font-family: ${(p) => p.theme.fonts.primary};
  margin-top: -4px;
`;
