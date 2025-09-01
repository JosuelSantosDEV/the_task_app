
import styled from "styled-components";
import { Link, NavLink as Nav } from "react-router-dom";

export type NavLinkProps = {
    to: string;
    label: string;
    extern?: boolean;
};

export type NavLinkItemsProps = {
    itemsLinks: NavLinkProps[]
};


const NavItem = styled(Nav)`
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  font-weight: bold;
  border-radius: ${p => p.theme.sizes.sm};
  padding: 10px 15px;

  &.active {
    color: ${p => p.theme.colors.blue};
  }

  &:hover {
    background-color: ${p => p.theme.colors.tertiary};
  }
`;

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  padding: 10px;

  @media ${p => p.theme.medias.sm} {
    flex-wrap: wrap;
  }
`;

export function NavLink( {itemsLinks} : NavLinkItemsProps) {
  return (
    <NavContainer>
      {
        itemsLinks.map( item => {
            if(!item.extern) return <NavItem to={item.to}>{item.label}</NavItem>;
            return <StyledLink to={item.to}>{item.label}</StyledLink>;
        })
      }
    </NavContainer>
  );
}