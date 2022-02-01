import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { GameBoard } from "../gameBoard";
import { Keyboard } from "../keyboard";
import { GameStates } from "../util/consts/TileStates";
import { WordContext } from "../util/contexts/WordContext";
import { colours } from "../util/theme/colors";
import { GameInfo } from "./gameInfo";
import { GameContainer, GuessTheWordText } from "./style";

export const Game: React.FC = () => {
  const {
    guesses,
    changeGuess,
    guessWord,
    gameState,
    resetGame,
    word,
    currentGuessIndex,
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
      <Keyboard handleKeyPress={changeGuess} handleSubmit={() => guessWord()} />
    </GameContainer>
  );
};
