import * as Styles from "./styles";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import { Checkbox } from "../../CheckBox";
import { FormContainer } from "../../FormContainer";
import { Input } from "../../Input";

type FormRegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormRegisterInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormRegisterInputs> = async (data) => {
    try {
      alert(data.email);
      navigate("/home");
    } catch {
      // Erro já é tratado no contexto
    }
  };

  const password = watch("password");

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        $variant="default"
        label="E-Mail"
        placeholder="Inform the registered email"
        type="email"
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
        placeholder="Inform a password"
        type="password"
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
      <Input
        $variant="default"
        label="Confirm password"
        placeholder="Confirm your password"
        type="password"
        {...register("confirmPassword", {
          required: "Password confirmation is required",
          validate: (value) => value === password || "Passwords do not match"
        })}
        error={errors.confirmPassword && errors.confirmPassword.message}
      />
      <Checkbox
        label="Accept all the terms"
        {...register("acceptTerms", {
          required: "You must accept the terms"
        })}
        error={errors.acceptTerms && errors.acceptTerms.message}
      />
      
      <Styles.ContainerButton>
        <Button 
          title={"Register"} 
          type="submit" 
          $size="md" 
        />
      </Styles.ContainerButton>
    </FormContainer>
  );
}
