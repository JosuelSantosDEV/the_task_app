import styled, { css } from "styled-components";
import type { ITheme } from "../../interfaces/ITheme";

type ContainerCenterProp = {
    $background: keyof ITheme["colors"] | undefined;
    $padding: number | undefined;
    $width: number | undefined;
    $height: number | undefined;
    $justifyContent: string | undefined;
    $alignItems: string | undefined;
    $direction: string | undefined;
    $gap: number | undefined;
    $shadow:  keyof ITheme["colors"] | undefined;
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
    padding: ${p => p.$padding ? p.$padding + "px" : "0"} ;
    background-color: ${ p => p.$background ? p.theme.colors[p.$background] :  "transparent"};
    ${({$shadow}) => {
        return $shadow ? css`
            box-shadow: 0 1px 1px 1px ${p => p.theme.colors[$shadow]};
        ` : "";
    }} ;
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

    @media ${p => p.theme.medias.md} {
        width: 90%;
    }
`;
