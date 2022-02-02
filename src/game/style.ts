import styled from "styled-components";
import { colours } from "../util/theme/colors";

interface IGameContainerProps {
  isMobile?: boolean;
}

export const GameContainer = styled.div<IGameContainerProps>`
  background-color: ${colours.blueDark};
  display: "flex";
  justify-content: "center";
  align-items: "center";
  flex-direction: "column";
  padding: ${({ isMobile }) => (isMobile ? "0.5rem" : "2rem")};
  border-radius: 0.2rem;
`;

export const GuessTheWordText = styled.h1`
  color: ${colours.white};
`;

export const HintButton = styled.button`
  background-color: ${colours.green};
  border-radius: 0.5rem;
  border: 1px solid ${colours.white};
  color: ${colours.white};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colours.greenDark};
  }
`;
