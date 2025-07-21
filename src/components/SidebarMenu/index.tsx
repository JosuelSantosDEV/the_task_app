import { useState } from "react";
import * as Styles from "./styles";
import { ButtonMenu } from "../ButtonMenu";
import { useTheme } from "../../hook/useTheme";

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {toggleTheme} = useTheme();

  return (
    <>
      <Styles.ToggleButton onClick={() => setIsOpen(true)}>
        ☰
      </Styles.ToggleButton>

      <Styles.Container $isOpen={isOpen}>
        <Styles.CloseButton onClick={() => setIsOpen(false)}>
          ✖
        </Styles.CloseButton>

        <Styles.Nav>
          <Styles.List>
            <ButtonMenu onClick={toggleTheme}>
              Theme
            </ButtonMenu>
            <Styles.Li>Home</Styles.Li>
            <Styles.Li>Sobre</Styles.Li>
            <Styles.Li>Contato</Styles.Li>
          </Styles.List>
        </Styles.Nav>
      </Styles.Container>
    </>
  );
};
