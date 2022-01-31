import { LetterTile } from "./letterTile";
import { KeyboardContainer, KeyboardRow } from "./style";

let qwertyKeyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m", "del"],
];

interface IKeyboardProps {
  handleKeyPress: (letter: string) => void;
}

export const Keyboard: React.FC<IKeyboardProps> = ({ handleKeyPress }) => {
  return (
    <KeyboardContainer>
      {qwertyKeyboardLetters.map((row) => (
        <KeyboardRow>
          {row.map((letter) => (
            <LetterTile
              key={letter}
              letter={letter.toUpperCase()}
              onClick={handleKeyPress}
            />
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
};
