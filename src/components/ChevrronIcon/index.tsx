
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

export const ChevronDown = styled(FaChevronDown)<{ $rotated?: boolean }>`
  width: 12px;
  height: 12px;
  color: ${p => p.theme.colors.blue};
  mask-size: contain;
  transform: rotate(${({ $rotated }) => ($rotated ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;
