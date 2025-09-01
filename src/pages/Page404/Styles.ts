import styled from "styled-components";

export const Container = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    background-color: ${p => p.theme.colors.primary};
`;

export const SubContainer = styled.main`
    width:60%;
    display: flex;
    align-items: center;
    justify-content: center;
`;