import { GameStates, IGameStates } from "../../util/consts/TileStates";
import { DarkOverlay, GameInfoContainer, RetryButton } from "./style";

interface IGameInfoProps {
  gameState: number;
  onReset: () => void;
}

export const GameInfo: React.FC<IGameInfoProps> = ({ gameState, onReset }) => {
  return (
    <DarkOverlay>
      <GameInfoContainer>
        <h1>
          {gameState === GameStates.WON
            ? "You won! Congrats!"
            : "You lost. Try again."}
        </h1>
        <RetryButton onClick={onReset}>Retry</RetryButton>
      </GameInfoContainer>
    </DarkOverlay>
  );
};
