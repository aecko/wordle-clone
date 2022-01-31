import { GameBoardContainer, GameBoardRow } from "./style";
import { Tile } from "./tile";

interface IGameBoardProps {
  guesses: string[];
}

export const GameBoard: React.FC<IGameBoardProps> = ({ guesses }) => {
  return (
    <GameBoardContainer>
      {guesses.map((_, index) => {
        return (
          <GameBoardRow key={index}>
            {Array(5)
              .fill(0)
              .map((_, letterIndex) => (
                <Tile key={index} letter={guesses[index].charAt(letterIndex)} />
              ))}
          </GameBoardRow>
        );
      })}
    </GameBoardContainer>
  );
};
