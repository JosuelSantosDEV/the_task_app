import { Outlet } from "react-router-dom";
import GradientText from "../../AnimateAndEffect/GradientText";
import { NavLink, type NavLinkProps } from "../../components/NavLink";
import * as Styles from "./styles";

const itensNav: NavLinkProps[] = [
    {
        label: "Main",
        to: "/"
    },
    {
        label: "Home",
        to: "/home"
    },
    {
        label: "Login",
        to: "auth/login"
    },
    {
        label: "Register",
        to: "auth/register"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Tasks",
        to: "/home/tasks"
    },
    {
        label: "React-hook-form",
        to: "https://react-hook-form.com/get-started",
        extern: true
    }
];


const MainLayout = () => {
    return (
        <Styles.Container>

            <div>
                <Styles.ContainerHeading>
                    <GradientText
                        animationSpeed={3}
                        showBorder={false}
                    >
                        <Styles.TextContainer>The Task App</Styles.TextContainer>   
                    </GradientText>
                </Styles.ContainerHeading>
                <NavLink itemsLinks={itensNav} />
            </div>
            <Outlet/>
        </Styles.Container>
    );
};

export default  MainLayout;