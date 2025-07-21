import styled from "styled-components";

export const Container = styled.div`

    height: 100%;
    width: 100%;

    display: grid;
    place-items: center;

    > svg {
        height: 90%;
        width: 90%;
        color: ${p => p.theme.colors.blue};
    }

`;