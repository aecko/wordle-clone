import styled from "styled-components";
import { TileStates } from "../../util/consts/TileStates";
import { colours } from "../../util/theme/colors";

interface ILetterTileContainerProps {
  state: number;
  isMobile?: boolean;
  specialKey?: boolean;
}

export const LetterTileContainer = styled.button<ILetterTileContainerProps>`
  padding: 0rem;
  width: ${({ isMobile }) => (isMobile ? "1.9rem" : "3rem")};
  ${({ specialKey, isMobile }) =>
    specialKey && `width: ${isMobile ? "2.5rem" : "4.2rem"}`};
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${({ state }) => {
    switch (state) {
      case TileStates.CORRECT:
        return colours.green;
      case TileStates.INCORRECT:
        return colours.red;
      case TileStates.PARTIAL:
        return colours.yellow;
      case TileStates.UNSELECTED:
        return colours.transparent;
      default:
        break;
    }
  }};
  border: 1px solid #fff;
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? "1rem" : "1.5rem")};
  ${({ specialKey, isMobile }) =>
    specialKey && `font-size: ${isMobile ? "0.6rem" : "1rem"}`};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${({ state }) =>
      state === TileStates.UNSELECTED ? `` : `background-color: #2874a6;`}
  }
`;
