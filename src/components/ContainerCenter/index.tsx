import type { ITheme } from "../../interfaces/ITheme";
import * as Styles from "./styles";

type ContainerCenterProp = {
    children: React.ReactNode;
    $background?: keyof ITheme["colors"] | undefined;
    $margin?: number | undefined;
    $height?: number | undefined;
    $width?: number | undefined;
    $justify?: string | undefined;
    $align?: string | undefined;
    $direction?: string | undefined;
    $gap?: number | undefined;
}

export const ContainerCenter = ({children, $background, $margin, $height, $width, $align, $justify, $direction, $gap}: ContainerCenterProp) => {
    return (
        <Styles.Container>
            <Styles.ContainerContent $background={$background} $margin={$margin} $height={$height} $width={$width}
                $alignItems={$align} $justifyContent={$justify} $direction={$direction} $gap={$gap}
            >
                {children}
            </Styles.ContainerContent>
        </Styles.Container>
    );
};