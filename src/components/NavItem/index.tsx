import * as Styled from "./styles";

export type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

export const NavItem = ({ to, children }: NavItemProps) => {
  return <Styled.NavItem to={to}>{children}</Styled.NavItem>;
};


