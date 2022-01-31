import { useContext } from "react";
import { WordContext } from "../util/contexts/WordContext";
import { GameBoardContainer, GameBoardRow } from "./style";
import { Tile } from "./tile";

export const GameBoard: React.FC = () => {
  const { word, guessWord, guesses } = useContext(WordContext);
  const guessesAllowed = 5;
  const wordLength = 5;
  return (
    <GameBoardContainer>
      {Array(guessesAllowed)
        .fill(0)
        .map((_, index) => (
          <GameBoardRow key={index}>
            {Array(wordLength)
              .fill(0)
              .map((_, index) => (
                <Tile />
              ))}
          </GameBoardRow>
        ))}
    </GameBoardContainer>
  );
};
