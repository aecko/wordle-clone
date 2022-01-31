import { TileStates } from "../../util/consts/TileStates";
import { TileContainer } from "./styles";

interface ITileProps {
  letter?: string;
  state?: number;
}

export const Tile: React.FC<ITileProps> = ({
  letter,
  state = TileStates.UNSELECTED,
}) => {
  return <TileContainer state={state}>{letter}</TileContainer>;
};
