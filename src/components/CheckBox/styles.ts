import styled, { css } from "styled-components";

type StyleProps = {
  $error?: boolean;
  $disabled?: boolean;
};

export const CheckboxContainer = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.sizes.sm};
  font-family: ${(p) => p.theme.fonts.primary};
  position: relative;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
`;

export const Checkbox = styled.input<StyleProps>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${(p) => p.theme.colors.primary};

  ${({ $error, theme }) =>
    $error &&
    css`
      outline: 2px solid ${theme.colors.red};
      outline-offset: 1px;
    `}
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 12px;
  color: ${(p) => p.theme.colors.red};
`;

export const HelperText = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 12px;
  color: ${(p) => p.theme.colors.gray};
`;
