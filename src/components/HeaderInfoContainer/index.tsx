import { MdAccountBox } from "react-icons/md";
import * as Styles from "./styles";

const infos = {
    username: "Jhon Doe",
    email: "jhondoe@email.commmmmmmmmmmmmmmmmmmmmmmmmmm",
    imgPerfil: <MdAccountBox />
};

export const HeaderInfoContainer = () => {
    return (
        <Styles.Container>
            <Styles.SubContainer>
                <h3>Hello, {infos.username}</h3>
                <h3>{infos.email} </h3>
            </Styles.SubContainer>
            <Styles.ImgContainer>
                {infos.imgPerfil}
            </Styles.ImgContainer>
        </Styles.Container>
    );
};