import { Outlet } from "react-router-dom";
import * as Styles from "./styles";
import { Header } from "../../components/Header";

export default function MainLayout(){
    return (
        <Styles.Container>
            <Header/>       
            <Outlet/>
        </Styles.Container>
    );
}