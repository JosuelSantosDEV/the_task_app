
import { MdHome } from "react-icons/md";
import { ButtonMenu } from "../ButtonMenu";
import * as Styles from "./styles";
import { Dropdown } from "../Dropdown";


export const HeaderMenu = () => {
  return (
      <Styles.Nav>
        <Styles.List>
          <ButtonMenu onClick={() => {}} title="Teste 1" >
               <MdHome size={20}/>
          </ButtonMenu>
          <ButtonMenu  onClick={() => {}} >
             Teste 2
          </ButtonMenu>
          <ButtonMenu onClick={() => {}} >
             Teste 3
          </ButtonMenu>
          <Dropdown/>
          <Dropdown disabled />
          <ButtonMenu disabled onClick={() => {}} >
             Teste 4
          </ButtonMenu>
        </Styles.List>
      </Styles.Nav>
  );
};
