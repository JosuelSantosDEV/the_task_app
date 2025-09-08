import { ContainerCenter } from "../../../components/ContainerCenter";
import { RegisterForm } from "../../../components/forms/RegisterForm";
import * as Styles from  "./styles";

export default function Register() {
  return (
   <Styles.Container>
     <ContainerCenter $background="primary" $shadow="tertiary" $padding={10} $width={50} $align="center" $direction="column" $gap={10} >
      <Styles.Title>
        Register
      </Styles.Title>
      <RegisterForm />
    </ContainerCenter>
   </Styles.Container>
  );
}
