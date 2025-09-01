// components/Sidebar/AccordionMenuItem.tsx
import { useState } from "react";
import { Container, ToggleButton, Content } from "./styles";
import { ChevronDown } from "../ChevrronIcon";
import { Button } from "../Button";


export type AccordionMenuItemProps = {
  label: string
  items: { label: string; onClick: () => void }[]
}

export const AccordionMenu = ({ label, items }: AccordionMenuItemProps) => {
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
          <Button $variant="simple"  $center={false} key={i} onClick={item.onClick} title={item.label} />
        ))}
      </Content>
    </Container>
  );
};
