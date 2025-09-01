import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: ${(p) => p.theme.sizes.sm};
  max-width: 250px;
`;

export const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-left: 10px;

  > h3 {
    font-size: 14px;
    color: ${(p) => p.theme.colors.text};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${(p) => p.theme.colors.blue};
    height: 50px;
    width: 50px;
  }
`;

export const DialogContainer = styled.dialog`
  position: absolute;
  top: 100%;
  border: 2px solid ${(p) => p.theme.colors.tertiary};
  border-radius: 6px;
  padding: 1rem;
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.text};
  min-width: 250px;
  margin: 0;

  &::backdrop {
    background: transparent;
  }

  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.5s ease-in-out;

  &[open] {
    opacity: 1;
    transform: translateY(0);
  }
`;
