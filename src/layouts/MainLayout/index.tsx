import { Outlet } from "react-router-dom";
import GradientText from "../../AnimateAndEffect/GradientText";
import { NavLink, type NavLinkProps } from "../../components/NavLink";
import * as Styles from "./styles";
import { Footer } from "../../components/Footer";

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
            <Footer/>
        </Styles.Container>
    );
};

export default  MainLayout;