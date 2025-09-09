import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../../Button";
import { FormContainer } from "../../FormContainer";
import { Input } from "../../Input";
import { StyledLink } from "../../StyledLink";
import * as Styles from "./styles";
import { UserService } from "../../../api/services/axios/UserService";
import type { IUserLoginData } from "../../../interfaces/IUserData";

type FormLoginInputs = {
  email: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormLoginInputs>();

  const onSubmit: SubmitHandler<FormLoginInputs> = async (data) => {
    const loginData: IUserLoginData = {email: data.email, password: data.password};
    try {
      const response = await UserService.loginUser(loginData);
      console.log("Response: ",response.data);
    } catch(error) {
      console.log("An error ucurred: ", error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        $variant="default"
        label="E-Mail"
        type="email"
        placeholder="Inform the registered email"
        {...register("email", {
          required: "E-mail is required",
          minLength: { value: 7, message: "E-mail must have at least 7 characters" },
          maxLength: { value: 255, message: "E-mail must have at most 255 characters" },
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "E-mail must be in the format something@something.something"
          }
        })}
        error={errors.email && errors.email.message}
      />

      <Input
        $variant="default"
        label="Password"
        type="password"
        placeholder="Inform the registered password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "Password must have at least 8 characters" },
          maxLength: { value: 20, message: "Password must have at most 20 characters" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            message:
              "Password must contain uppercase, lowercase, digit, special character and be between 8–20 characters"
          }
        })}
        error={errors.password && errors.password.message}
      />

      <StyledLink to="auth/forget">
        Forget my password
      </StyledLink>
      
      <Styles.ContainerButton>
        <Button 
          title={"Login"} 
          type="submit" 
          $size="md" 
        />
      </Styles.ContainerButton>
    </FormContainer>
  );
}
