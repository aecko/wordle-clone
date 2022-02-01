import styled from "styled-components";
import { TileStates } from "../../util/consts/TileStates";
import { colours } from "../../util/theme/colors";

interface ITileContainerProps {
  state: number;
  isMobile?: boolean;
}

export const TileContainer = styled.div<ITileContainerProps>`
  padding: 0.5rem;
  width: ${({ isMobile }) => (isMobile ? "2.5rem" : "4rem")};
  height: ${({ isMobile }) => (isMobile ? "2.5rem" : "4rem")};
  border-radius: 1rem;
  background-color: ${({ state }) => {
    switch (state) {
      case TileStates.CORRECT:
        return colours.green;
      case TileStates.INCORRECT:
        return colours.red;
      case TileStates.PARTIAL:
        return colours.yellow;
      case TileStates.UNSELECTED:
        return colours.grey;
      default:
        break;
    }
  }};
  border: 1px solid #fff;
  color: #000;
  font-size: ${({ isMobile }) => (isMobile ? "2.5rem" : "4rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
`;
