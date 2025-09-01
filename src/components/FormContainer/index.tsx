import type { FormHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import type { ITheme } from "../../interfaces/ITheme";

type FormContainerProps = {$background?: keyof ITheme["colors"] | undefined}& PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>;
type FormContainerStyleProp ={
    $background?: keyof ITheme["colors"] | undefined;
}
const StyledForm = styled.form<FormContainerStyleProp>`
    width: 100%;
    height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: ${p => p.theme.sizes.sm};

  margin: 0 auto;
  padding: ${p => p.theme.sizes.sm};
  
  background: ${p => p.$background ? p.theme.colors[p.$background] : "transparent"};
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.sizes.sm};
`;

export const FormContainer: React.FC<FormContainerProps> = ({$background, children, ...props }) => {
  return <StyledForm $background={$background} {...props}>{children}</StyledForm>;
};
