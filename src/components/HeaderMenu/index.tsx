
import { MdHome } from "react-icons/md";
import { Button } from "../Button";
import * as Styles from "./styles";
import { DropdownMenu } from "../DropdownMenu";
import { useNavigate } from "react-router-dom";


const dropdownOptions = [
  {
    optionTitle: "Teste",
    click: () => alert("Hello :)")
  },
  {
    optionTitle: "Teste",
    click: () => alert("Hello :)")
  },
  {
    optionTitle: "Teste",
    click: () => alert("Hello :)")
  }
];


export const HeaderMenu = () => {

  const navigate = useNavigate();
  const handleNavigateToMain = () => {
    navigate("/");
  };

  return (
      <Styles.Nav>
        <Styles.List>
          <Button onClick={handleNavigateToMain} title="Teste 1" >
               <MdHome size={18}/>
          </Button>
          <Button  onClick={() => {}} >
             Teste 2
          </Button>
          <Button onClick={() => {}} >
             Teste 3
          </Button>
          <DropdownMenu title="Options" options={dropdownOptions}/>
          <DropdownMenu title="Options" options={dropdownOptions} disabled />
          <Button disable={true} onClick={() => {}} title="Teste 4" />
   
        </Styles.List>
      </Styles.Nav>
  );
};
