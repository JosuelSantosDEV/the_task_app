
import { ButtonMenu } from "../ButtonMenu";
import * as Styles from "./styles";


export const HeaderMenu = () => {
  return (
      <Styles.Nav>
        <Styles.List>
          <ButtonMenu onClick={() => {}}>
              Teste 1
          </ButtonMenu>
          <ButtonMenu  onClick={() => {}} >
             Teste 2
          </ButtonMenu>
          <ButtonMenu onClick={() => {}} >
             Teste 3
          </ButtonMenu>
          <ButtonMenu disabled onClick={() => {}} >
             Teste 4
          </ButtonMenu>
        </Styles.List>
      </Styles.Nav>
  );
};
