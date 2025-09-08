
import styled from "styled-components";
import { NavItem } from "../NavItem";
import { StyledLink } from "../StyledLink";

export type NavLinkProps = {
    to: string;
    label: string;
    extern?: boolean;
};

export type NavLinkItemsProps = {
    itemsLinks: NavLinkProps[]
};


 

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  padding: 10px;
  box-shadow: 0 1px 1px 1px ${p => p.theme.colors.tertiary};

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