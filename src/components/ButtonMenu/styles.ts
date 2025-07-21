
import styled, { css } from "styled-components";

type StyleProps = {
  disabled?: boolean;
};


export const ButtonContainer = styled.div<StyleProps>`
  ${
      ({disabled}) => {
        if(disabled) return css` cursor: not-allowed; `;
        return css` cursor: pointer; `;
      }
  
  }

  border-radius: 6px;
  

  background-color:  transparent;

  &:hover {
    background-color:  ${(p) => p.theme.colors.secundary};
  }


    

`;

export const Container = styled.button<StyleProps>`
  height: 100%;
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: ${(p) => p.theme.sizes.md};
  padding:${(p) => p.theme.sizes.sm};


  transition: background 0.2s ease;

  cursor: pointer;

  background-color: transparent;
  color: ${(p) => p.theme.colors.text};
  

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
