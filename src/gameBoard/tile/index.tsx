import { useContext } from "react";
import { UIContext } from "../../util/contexts/UIContext";
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
  const { isMobile } = useContext(UIContext);
  return (
    <TileContainer state={state} isMobile={isMobile}>
      {letter}
    </TileContainer>
  );
};
