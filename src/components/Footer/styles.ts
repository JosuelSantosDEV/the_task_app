import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.text};
  padding: 40px 20px 20px;
  font-family: ${(p) => p.theme.fonts.primary};
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
`;

export const Column = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;

      a {
        color: inherit;
        text-decoration: none;
        font-size: 14px;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export const SocialColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.primary};
    color:${(p) => p.theme.colors.text} ;
    font-size: 18px;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      background-color: ${(p) => p.theme.colors.secondary};
    }
  }
`;

export const BottomBar = styled.div`
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid ${(p) => p.theme.colors.quaternary};
  padding-top: 20px;

  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;
