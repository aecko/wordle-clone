import { useContext } from "react";
import { GameBoard } from "../gameBoard";
import { Keyboard } from "../keyboard";
import { GameStates } from "../util/consts/TileStates";
import { WordContext } from "../util/contexts/WordContext";
import { GameInfo } from "./gameInfo";
import { GameContainer } from "./style";

export const Game: React.FC = () => {
  const { guesses, changeGuess, guessWord, gameState, resetGame } =
    useContext(WordContext);
  return (
    <GameContainer>
      {gameState !== GameStates.PLAYING && (
        <GameInfo gameState={gameState} onReset={resetGame} />
      )}
      <GameBoard guesses={guesses} />
      <Keyboard handleKeyPress={changeGuess} handleSubmit={() => guessWord()} />
    </GameContainer>
  );
};
