import * as Styles from "./styles";

type TesteProps = {
    teste: string;
}

export const Teste = ({teste}: TesteProps) => {
    return (
        <Styles.Container>{teste}</Styles.Container>
    );
};