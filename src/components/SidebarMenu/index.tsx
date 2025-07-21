import { useState } from "react";
import * as Styles from "./styles";
import { ButtonMenu } from "../ButtonMenu";
import { useTheme } from "../../hook/useTheme";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { AccordionMenuItem } from "../AccordionMenuItem";

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {toggleTheme, currentTheme} = useTheme();

  return (
    <>
      <Styles.ToggleButton onClick={() => setIsOpen(true)}>
        <MdMenu/>
      </Styles.ToggleButton>

      <Styles.Container $isOpen={isOpen}>
        <Styles.CloseButton onClick={() => setIsOpen(false)}>
          <MdClose/>
        </Styles.CloseButton>

        <Styles.Nav>
          <Styles.List>
            <ButtonMenu $size="lg" onClick={toggleTheme} title="Theme">
              { currentTheme === "dark" ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </ButtonMenu>
            <Styles.Li>Home</Styles.Li>
            <Styles.Li>Sobre</Styles.Li>
            <Styles.Li>Contato</Styles.Li>
            <AccordionMenuItem
              label="Usuários"
              items={[
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Novo usuário", onClick: () => console.log("novo") },
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Listar usuários", onClick: () => console.log("listar") },
              ]}
            />

            <AccordionMenuItem
              label="Relatórios"
              items={[
                { label: "Mensal", onClick: () => console.log("mensal") },
                { label: "Anual", onClick: () => console.log("anual") },
              ]}
            />
          </Styles.List>
        </Styles.Nav>
      </Styles.Container>
    </>
  );
};
