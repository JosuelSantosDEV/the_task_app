import type { ITheme } from "../../interfaces/ITheme";
import * as Styles from "./styles";

type ContainerCenterProp = {
    children: React.ReactNode;
    className?: string;
    $background?: keyof ITheme["colors"] | undefined;
    $padding?: number | undefined;
    $height?: number | undefined;
    $width?: number | undefined;
    $justify?: string | undefined;
    $align?: string | undefined;
    $direction?: string | undefined;
    $gap?: number | undefined;
    $shadow?:  keyof ITheme["colors"] | undefined;
}

export const ContainerCenter = ({children,className, $background, $padding, $height, $width, $align, $justify, $direction, $gap, $shadow}: ContainerCenterProp) => {
    return (
        <Styles.Container className={className} >
            <Styles.ContainerContent $background={$background} $padding={$padding} $height={$height} $width={$width}
                $alignItems={$align} $justifyContent={$justify} $direction={$direction} $gap={$gap} $shadow={$shadow}
            >
                {children}
            </Styles.ContainerContent>
        </Styles.Container>
    );
};