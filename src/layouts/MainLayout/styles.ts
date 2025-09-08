import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.background};
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

export const ContainerHeading = styled.div`
    width: 100%;
    margin-top: ${p => p.theme.sizes.sm};
    margin-bottom: ${p => p.theme.sizes.md};

`;

export const TextContainer = styled.h1`
    font-weight: 900;
    font-size: 32px;
    display: grid;
`;