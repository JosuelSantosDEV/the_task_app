
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ToggleButton = styled.button<{ $open: boolean,}>`
  width: 100%;
  padding: ${p => p.theme.sizes.sm};
  background: none;
  border: none;
  border-radius: ${p => p.theme.sizes.sm};
  font-size: ${p => p.theme.sizes.md};
  color: ${p => p.theme.colors.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color:${p => p.theme.colors.secundary};
  }
`;

export const Content = styled.div<{ $open: boolean,  $isScroll: boolean  }>`
  margin-top: 5px;
  max-height: ${({ $open }) => ($open ? "160px" : "0")};
  ${({$isScroll}) => $isScroll ? css`overflow-y: auto;` : css`overflow: hidden;`}
  transition: max-height 0.3s ease;
  background-color: ${p => p.theme.colors.background};
  border-radius: 6px;
`;

