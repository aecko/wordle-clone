import styled from "styled-components";
import { colours } from "../util/theme/colors";

interface IGameContainerProps {
  isMobile?: boolean;
}

export const GameContainer = styled.div<IGameContainerProps>`
  background-color: ${colours.blue};
  display: "flex";
  justify-content: "center";
  align-items: "center";
  flex-direction: "column";
  padding: ${({ isMobile }) => (isMobile ? "0.5rem" : "2rem")};
  border-radius: 2rem;
`;

export const GuessTheWordText = styled.h1`
  color: ${colours.white};
`;
