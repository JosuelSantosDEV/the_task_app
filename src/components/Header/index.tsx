import { HeaderInfoContainer } from "../HeaderInfoContainer";
import { HeaderMenu } from "../HeaderMenu";
import { Logo } from "../Logo";
import { SidebarMenu } from "../SidebarMenu";
import * as Styles from "./styles";

export type ButtonMenuProps = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Header = () => {
    return (
        <Styles.Header>
            <Styles.Logo>
                <Logo/>
            </Styles.Logo>
            <Styles.HeaderMenuContainer>
                <HeaderMenu />
            </Styles.HeaderMenuContainer>
            <Styles.InfoContainer>
                <HeaderInfoContainer/>
            </Styles.InfoContainer>
            <Styles.SidebarMenuContainer>
                <SidebarMenu/>
            </Styles.SidebarMenuContainer>
        </Styles.Header>
    );
};
