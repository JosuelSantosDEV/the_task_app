import "styled-components";
import type { ITheme } from "./interfaces/ITheme";


declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ITheme {}
}