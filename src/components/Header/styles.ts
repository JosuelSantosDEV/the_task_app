import styled from "styled-components";

export const Header = styled.header`
    width: 100%;

    padding-left: ${p => p.theme.sizes.md};
    padding-right: ${p => p.theme.sizes.md };
    border-bottom: 2px solid ${p => p.theme.colors.tertiary};

    background-color: ${p => p.theme.colors.primary};

    display: grid;
    align-items: center;
    gap: ${p => p.theme.sizes.md};

    grid-template-columns: auto 1fr auto auto;
    grid-template-areas:
        "logo header_menu info_container sidebar_menu"
    ;

    @media ${p => p.theme.medias.lg} {
        gap: 4px;
        grid-template-columns: auto 1fr auto auto;
        grid-template-rows: 80px 40px;
        grid-template-areas:
            "logo . info_container sidebar_menu"
            "header_menu header_menu header_menu header_menu"
        ;
    }
   
`;


export const HeaderMenuContainer = styled.div`
    grid-area:header_menu;

    height: 80%;

    border-radius: ${p => p.theme.sizes.sm};

    flex: 1;

    background-color: ${p => p.theme.colors.primary};

`;

export const InfoContainer = styled.div`
    grid-area:info_container;
    height: 80%;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

`;

export const SidebarMenuContainer = styled.div`
    grid-area: sidebar_menu;
    width: 64px;
    height: 64px;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled.div`
    grid-area: logo;
    width: 64px;
    height: 64px;
    border-radius: ${p => p.theme.sizes.sm};
    background-color: ${p => p.theme.colors.primary};

`;
