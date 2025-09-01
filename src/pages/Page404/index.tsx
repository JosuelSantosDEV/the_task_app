import * as Styles from "./Styles";
import FuzzyText from "../../AnimateAndEffect/FuzzyText";

export default function Page404(){
    return (
        <Styles.Container>
           <Styles.SubContainer>
             <FuzzyText
                fontSize={64}
             >
                You lost and landed on 404
            </FuzzyText>
           </Styles.SubContainer>
           
        </Styles.Container>
    );
}
