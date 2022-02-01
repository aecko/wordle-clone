import { GameStates } from "../../util/consts/TileStates";
import { DarkOverlay, GameInfoContainer, RetryButton } from "./style";

interface IGameInfoProps {
  gameState: number;
  onReset: () => void;
  gameWord: string;
  guessCount: number;
}

export const GameInfo: React.FC<IGameInfoProps> = ({
  gameState,
  onReset,
  gameWord,
  guessCount,
}) => {
  return (
    <DarkOverlay>
      <GameInfoContainer>
        <h1>
          {gameState === GameStates.WON
            ? "You won! Congrats!"
            : "You lost. Try again."}
        </h1>
        <h3>The word was: {gameWord.toUpperCase()}</h3>
        {gameState === GameStates.WON && (
          <h3>You guessed it in {guessCount} guesses!</h3>
        )}
        <RetryButton onClick={onReset}>Retry</RetryButton>
      </GameInfoContainer>
    </DarkOverlay>
  );
};
