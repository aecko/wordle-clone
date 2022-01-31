import { useContext } from "react";
import { GameBoard } from "../gameBoard";
import { Keyboard } from "../keyboard";
import { WordContext } from "../util/contexts/WordContext";
import { GameContainer } from "./style";

export const Game: React.FC = () => {
  const { guesses, changeGuess, guessWord } = useContext(WordContext);
  return (
    <GameContainer>
      <GameBoard guesses={guesses} />
      <Keyboard handleKeyPress={changeGuess} handleSubmit={() => guessWord()} />
    </GameContainer>
  );
};
