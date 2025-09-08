import styled from "styled-components";
import { NavLink as Nav } from "react-router-dom";

export const NavItem = styled(Nav)`
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  border-radius: ${p => p.theme.sizes.sm};
  padding: 6px 10px;

  &.active {
    color: ${p => p.theme.colors.blue};
  }

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;


