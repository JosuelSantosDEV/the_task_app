
import styled, { css } from "styled-components";

type StyleProps = {
  disabled?: boolean;
  $size?: "sm" | "md" | "lg"
  $variant?: "siple" | "default";
  $center?: boolean
};


export const ButtonContainer = styled.div<StyleProps>`
  ${
      ({disabled}) => {
        if(disabled) return css` cursor: not-allowed; `;
        return css` cursor: pointer; `;
      }
  
  }

  ${
      ({$variant}) => {
        if($variant === "siple") return css`   border-radius: none; `;
        return css`   border-radius: 6px;`;
      }
  
  }

  overflow: hidden;
  background-color:  transparent;

  ${
    ({theme, $size}) => {

      switch($size){
        case "lg" : {
          return css`
            height: ${theme.sizes["2xl"]};


          `;
        }
        case "sm" : {
          return css`
            height: ${theme.sizes.lg};


          `;
        }
        default : {
          return css`
            height: ${theme.sizes.xl};

          `;
        }
      }
    }
  }

    

`;

export const Container = styled.button<StyleProps>`
  height: 100%;
  width: 100%;

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
    background-color:  ${(p) => p.theme.colors.secundary};
  }

  ${
      ({$center}) => {
        if($center) return css`justify-content:space-around; `;
        return css` justify-content:start;`;
      }
  
  }

  ${
    ({ $size}) => {

      switch($size){
        case "lg" : {
          return css`
            font-size: 20px;
            font-weight: 600;
          `;
        }
        case "md" : {
          return css`
            font-size: ${p => p.theme.sizes.md};
            `;
        }
        case "sm" : {
          return css`
            font-size: 12px;
          `;
        }
        default : {
          return css`
            font-size: 14px;
            
          `;
        }
      }
    }
  }
  

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
