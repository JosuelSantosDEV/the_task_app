import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.background};

    display: grid;
    grid-template-rows: auto 1fr;
`;


