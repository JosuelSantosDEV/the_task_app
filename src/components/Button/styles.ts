
import styled, { css } from "styled-components";

type StyleProps = {
  disabled?: boolean;
  $size?: "sm" | "md" | "lg"
  $variant?: "simple" | "default";
  $center?: boolean
};

export const Button = styled.button<StyleProps>`
  height: 100%;

  border: none;

  font-weight: 500;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  padding-left:${(p) => p.theme.sizes.sm} ;
  padding-right:${(p) => p.theme.sizes.sm} ;

  display: flex;
  align-items: center;
  gap: 10px;

  transition: background 0.2s ease;

  cursor: pointer;

  background-color: transparent;
  color: ${(p) => p.theme.colors.text};

  &:hover {
    background-color:  ${(p) => p.theme.colors.secondary};
  }

  ${ 
      ({$variant}) => {
        switch($variant){
          case "simple" : {
            return css`
              border-radius: none; 
              width: 100%;
            `;
          }
          default : {
            return css`
              border-radius: 6px;
            `;
          }
        }
      }
  
  }

  ${
      ({$center}) => {
        if($center) return css`justify-content:space-around; `;
        return css` justify-content:start;`;
      }
  
  }

  ${
    ({theme, $size}) => {

      switch($size){
        case "lg" : {
          return css`
            height: ${theme.sizes["2xl"]};
            font-size: 20px;
            font-weight: 600;
          `;
        }
        case "md" : {
          return css`
            height: ${theme.sizes.xl};
            font-size: ${p => p.theme.sizes.md};
          `;
        }
        case "sm" : {
          return css`
            height: ${theme.sizes.lg};
            font-size: 12px;
          `;
        }
        default : {
          return css`
            height: ${theme.sizes.xl};
            font-size: 14px;
          `;
        }
      }
    }
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
