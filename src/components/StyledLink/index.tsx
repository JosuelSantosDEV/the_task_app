import * as Styled from "./styles";

export type StyledLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const StyledLink = ({ to, children }: StyledLinkProps) => {
  return <Styled.StyledLink to={to}>{children}</Styled.StyledLink>;
};


