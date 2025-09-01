import styled, { css } from "styled-components";
import type { ITheme } from "../../interfaces/ITheme";

type ContainerCenterProp = {
    $background: keyof ITheme["colors"] | undefined;
    $margin: number | undefined;
    $width: number | undefined;
    $height: number | undefined;
    $justifyContent: string | undefined;
    $alignItems: string | undefined;
    $direction: string | undefined;
    $gap: number | undefined;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: transparent;
`;

export const ContainerContent = styled.div<ContainerCenterProp>`
    width: ${p => p.$width ? p.$width + "%" : "auto"} ;
    height: ${p => p.$height ? p.$height + "%" : "auto"} ;
    border-radius: ${p => p.theme.sizes.sm} ;
    padding: ${p => p.$margin ? p.$margin + "px" : "0"} ;
    background-color: ${ p => p.$background ? p.theme.colors[p.$background] :  "transparent"};
    ${p => {
        return p.$justifyContent ? css`
            display: flex;
            justify-content: center;
        ` : "";
    }} ;
    ${p => {
        return p.$alignItems ? css`
            display: flex;
            align-items: center;
        ` : "";
    }} ;
    ${p => {
        return p.$direction ? css`
            flex-direction: ${p.$direction};
        ` : "";
    }} ;
    ${p => {
        return p.$gap ? css`
            gap: ${p.$gap}px;
        ` : "";
    }} ;
`;
