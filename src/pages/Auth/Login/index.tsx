import { Button } from "../../../components/Button";
import { ContainerCenter } from "../../../components/ContainerCenter";
import { FormContainer } from "../../../components/FormContainer";
import { Input } from "../../../components/Input";
//import * as Styles from  "./styles";

export default function Login() {
  return (
    <ContainerCenter $background="primary" $margin={10} $height={50} $width={30} $align="center" $direction="column" $gap={10} >
      <h1>
        This is login Page
      </h1>
      <FormContainer>
        <Input
          $variant="default"
          label="E-Mail"
          placeholder="Inform the registered email"
        />
        <Input
          $variant="default"
          label="Password"
          placeholder="Inform the registered password"
        />
        <Button title="Login"  />
      </FormContainer>
    </ContainerCenter>
  );
}
