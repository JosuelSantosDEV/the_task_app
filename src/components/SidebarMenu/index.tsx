import { useState, useEffect, useRef } from "react";
import * as Styles from "./styles";
import { Button } from "../Button";
import { useTheme } from "../../hook/useTheme";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { AccordionMenu } from "../AccordionMenu";

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, currentTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Styles.ToggleButton onClick={() => setIsOpen(true)}>
        <MdMenu />
      </Styles.ToggleButton>

      <Styles.Container $isOpen={isOpen} ref={menuRef}>
        <Styles.CloseButton onClick={() => setIsOpen(false)}>
          <MdClose />
        </Styles.CloseButton>

        <Styles.Nav>
          <Styles.List>
            <Button $size="lg" onClick={toggleTheme} title="Theme">
              {currentTheme === "dark" ? (
                <MdLightMode size={20} />
              ) : (
                <MdDarkMode size={20} />
              )}
            </Button>

            <Styles.Li>Home</Styles.Li>
            <Styles.Li>Sobre</Styles.Li>
            <Styles.Li>Contato</Styles.Li>

            <AccordionMenu
              label="Usuários"
              items={[
                { label: "Listar usuários", onClick: () => console.log("listar") },
                { label: "Novo usuário", onClick: () => console.log("novo") },
              ]}
            />

            <AccordionMenu
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
