import { LetterTileContainer } from "./style";

interface ILetterTileProps {
  letter: string;
  onClick: (letter: string) => void;
}

export const LetterTile: React.FC<ILetterTileProps> = ({ letter, onClick }) => {
  return (
    <LetterTileContainer onClick={() => onClick(letter)}>
      {letter}
    </LetterTileContainer>
  );
};
