import { useContext } from "react";
import { UIContext } from "../util/contexts/UIContext";
import { GameBoard } from "../gameBoard";
import { Keyboard } from "../keyboard";
import { GameStates } from "../util/consts/TileStates";
import { WordContext } from "../util/contexts/WordContext";
import { GameInfo } from "./gameInfo";
import { GameContainer, HintButton } from "./style";

export const Game: React.FC = () => {
  const {
    guesses,
    changeGuess,
    guessWord,
    gameState,
    resetGame,
    word,
    currentGuessIndex,
    getHint,
  } = useContext(WordContext);
  const { isMobile } = useContext(UIContext);
  return (
    <GameContainer isMobile={isMobile}>
      {gameState !== GameStates.PLAYING && (
        <GameInfo
          gameState={gameState}
          onReset={resetGame}
          gameWord={word}
          guessCount={currentGuessIndex}
        />
      )}
      <GameBoard guesses={guesses} />
      {false && <HintButton onClick={getHint}>Hint</HintButton>}

      <Keyboard handleKeyPress={changeGuess} handleSubmit={() => guessWord()} />
    </GameContainer>
  );
};
