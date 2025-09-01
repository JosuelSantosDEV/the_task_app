import { MdAccountBox } from "react-icons/md";
import * as Styles from "./styles";
import { useEffect, useRef } from "react";

const infos = {
  username: "Jhon Doe",
  email: "jhondoe@email.commmmmmmmmmmmmmmmmmmmmmmmmmm",
  imgPerfil: <MdAccountBox />,
};

export const HeaderInfoContainer = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenDialog = () => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.show();
    }
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    if (dialogRef.current?.open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        handleCloseDialog();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseDialog();
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
  }, []);

  return (
    <Styles.Container>
      <Styles.SubContainer onClick={handleOpenDialog}>
        <h3>Hello, {infos.username}</h3>
        <h3>{infos.email}</h3>
      </Styles.SubContainer>
      <Styles.ImgContainer onClick={handleOpenDialog}>
        {infos.imgPerfil}
      </Styles.ImgContainer>

      <Styles.DialogContainer ref={dialogRef}>
        <header>
          <h2>Menu do Usuário</h2>
          <button onClick={handleCloseDialog}>Fechar</button>
        </header>
        <ul>
          <li>Editar perfil</li>
          <li>Configurações</li>
          <li>Sair</li>
        </ul>
      </Styles.DialogContainer>
    </Styles.Container>
  );
};
