// components/Sidebar/AccordionMenuItem.tsx
import { useState } from "react";
import { Container, ToggleButton, Content } from "./styles";
import { ChevronDown } from "../ChevrronIcon";
import { ButtonMenu } from "../ButtonMenu";


export type AccordionMenuItemProps = {
  label: string
  items: { label: string; onClick: () => void }[]
}

export const AccordionMenuItem = ({ label, items }: AccordionMenuItemProps) => {
  const [open, setOpen] = useState(false);

  const isScroll = items.length > 5 ? true : false;

  return (
    <Container>
      <ToggleButton onClick={() => setOpen(!open)} $open={open}>
        {label}
        <ChevronDown $rotated={open} />
      </ToggleButton>

      <Content $open={open} $isScroll={isScroll} >
        {items.map((item, i) => (
          <ButtonMenu $variant="siple"  $center={false} key={i} onClick={item.onClick} title={item.label} />
        ))}
      </Content>
    </Container>
  );
};
