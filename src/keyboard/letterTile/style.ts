import styled from "styled-components";
import { TileStates } from "../../util/consts/TileStates";
import { colours } from "../../util/theme/colors";

interface ILetterTileContainerProps {
  state: number;
}

export const LetterTileContainer = styled.button<ILetterTileContainerProps>`
  padding: 0.5rem;
  width: 3rem;
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
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${({ state }) =>
      state === TileStates.INCORRECT ? `` : `background-color: #2874a6;`}
  }
`;
