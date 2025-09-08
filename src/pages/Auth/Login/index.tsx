import { ContainerCenter } from "../../../components/ContainerCenter";
import { LoginForm } from "../../../components/forms/LoginForm";
import * as Styles from  "./styles";

export default function Login() {
  return (
    <Styles.Container>
      <ContainerCenter $background="primary" $shadow="tertiary" $padding={10} $width={50}
      $align="center" $direction="column" $gap={10} 
      >
        <Styles.Title>
          Login
        </Styles.Title>
        <LoginForm />
      </ContainerCenter>
    </Styles.Container>
  );
}
