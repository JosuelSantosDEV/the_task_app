import styled from "styled-components";

export const Header = styled.header`

    width: 100%;
    height: 80px;

    padding-left: ${p => p.theme.sizes.md};
    padding-right: ${p => p.theme.sizes.md };
    border-bottom: 2px solid ${p => p.theme.colors.tertiary};

    background-color: ${p => p.theme.colors.primary};

    display: flex;
    align-items: center;
    gap: ${p => p.theme.sizes.md};
   

`;


export const HeaderMenuContainer = styled.div`

    height: 80%;

    border-radius: ${p => p.theme.sizes.sm};

    flex: 1;

    background-color: ${p => p.theme.colors.primary};

`;

export const InfoContainer = styled.div`

    width: 250px;
    height: 80%;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

`;

export const SidebarMenuContainer = styled.div`

    width: 64px;
    height: 64px;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled.div`

    width: 64px;
    height: 64px;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

`;
