import styled from "styled-components";

interface IKeyboardProps {
  isMobile?: boolean;
}

export const KeyboardRow = styled.div<IKeyboardProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ isMobile }) => (isMobile ? "0.2rem" : "0.5rem")};
`;

export const KeyboardContainer = styled.div<IKeyboardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ isMobile }) => (isMobile ? "0.3rem" : "0.5rem")};
  margin: 0;
`;
