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
  background-color: ${p  => p.theme.colors.primary};
  color: ${p  => p.theme.colors.text};
  z-index: 1000;

  border-left: 2px solid ${p => p.theme.colors.tertiary};

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
  height: 40px;
  width: 40px;

  border-radius:${p => p.theme.sizes.sm};

  font-size:${p => p.theme.sizes.xl};
  background: none;
  border: none;
  color: ${p => p.theme.colors.blue};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  height: 30px;
  width: 30px;
  border-radius:${p => p.theme.sizes.sm};;

  font-size:${p => p.theme.sizes.lg};
  font-weight: 900;
  background: ${p => p.theme.colors.blue};
  border: none;
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.blue};
  }
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

  padding: ${p => p.theme.sizes.sm};

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
