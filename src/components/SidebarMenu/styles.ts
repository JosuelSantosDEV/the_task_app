import styled, { css } from "styled-components";

type ContainerProps = {
  $isOpen: boolean;
};

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: ${p  => p.theme.colors.tertiary};
  color: ${p  => p.theme.colors.text};
  z-index: 1000;

  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transform: translateX(0);
          opacity: 1;
          pointer-events: all;
        `
      : css`
          transform: translateX(100%);
          opacity: 0;
          pointer-events: none;
        `}
`;

export const ToggleButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const Nav = styled.nav`
  margin-top: 80px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

export const Li = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
