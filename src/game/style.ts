import styled from "styled-components";
import { colours } from "../util/theme/colors";

export const GameContainer = styled.div`
  background-color: ${colours.blue};
  display: "flex";
  justify-content: "center";
  align-items: "center";
  flex-direction: "column";
  margin: 0 auto;
  padding: 2rem;
  border-radius: 2rem;
`;

export const GuessTheWordText = styled.h1`
  color: ${colours.white};
`;
