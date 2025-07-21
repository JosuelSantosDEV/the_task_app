
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";
import { ChevronDown } from "../ChevrronIcon";
import { useState } from "react";

type StyleProps = {
  disabled?: boolean;
  $size?: "sm" | "md" | "lg"
};


const TriggerButton = styled.button<StyleProps>`
  background: transparent;
  color: ${p => p.theme.colors.blue};

  border: none;
  padding: 0 ${p => p.theme.sizes.sm};
  border-radius: 6px;
  outline: none;

  font-size: ${p => p.theme.sizes.md};
  font-weight:600;

  display: flex;
  align-items: center;
  gap:${p => p.theme.sizes.sm};
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.colors.secundary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

    ${
    ({theme, $size}) => {

      switch($size){
        case "lg" : {
          return css`
            height: ${theme.sizes["2xl"]};


          `;
        }
        case "sm" : {
          return css`
            height: ${theme.sizes.lg};


          `;
        }
        default : {
          return css`
            height: ${theme.sizes.xl};

          `;
        }
      }
    }
  }
`;

const Content = styled(DropdownMenu.Content)`
  background: ${p => p.theme.colors.primary};
  border: none;
  border-radius: 6px;
  padding: 4px 0;
  min-width: 160px;
  box-shadow: 0 0 1px 2px ${p => p.theme.colors.tertiary};
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Item = styled(DropdownMenu.Item)`
  padding: 8px 12px;
  font-size: 14px;
  color: ${p => p.theme.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.tertiary};
  }

  &[data-disabled] {
    color: ${p => p.theme.colors.background};
    cursor: not-allowed;
    pointer-events: none;
    color:${p => p.theme.colors.text};
    opacity: 0.5;
  }

  &[data-highlighted] {
    background-color: ${p => p.theme.colors.tertiary};
    color: ${p => p.theme.colors.text};
  }
`;

const DisableMouseContainer = styled.div<StyleProps>`
    ${
      ({disabled}) => {
        if(disabled) return css` cursor: not-allowed; `;
        return css` cursor: pointer; `;
      }
  
    }
`;

export const Dropdown = ({$size, disabled} : StyleProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DisableMouseContainer disabled={disabled}>
        <DropdownMenu.Trigger asChild>
            <TriggerButton $size={$size} disabled={disabled} >
            Opções
            <ChevronDown $rotated={open} />
            </TriggerButton>
        </DropdownMenu.Trigger>
      </DisableMouseContainer>

      <Content sideOffset={10}>
        <Item onSelect={() => alert("Editar")}>Editar</Item>
        <Item onSelect={() => alert("Excluir")}>Excluir</Item>
        <DropdownMenu.Separator asChild>
          <hr style={{ margin: "4px 0", border: "none", borderTop: "1px solid #eee" }} />
        </DropdownMenu.Separator>
        <Item data-disabled onSelect={() => alert("Excluir")}>Desabilitado</Item>
      </Content>
    </DropdownMenu.Root>
  );
};
