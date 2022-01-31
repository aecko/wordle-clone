import { LetterTile } from "./letterTile";
import { KeyboardContainer, KeyboardRow } from "./style";

let qwertyKeyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const handleLetterSelect = (letter: string) => {
  console.log(letter);
};

export const Keyboard: React.FC = () => {
  return (
    <KeyboardContainer>
      {qwertyKeyboardLetters.map((row) => (
        <KeyboardRow>
          {row.map((letter) => (
            <LetterTile
              key={letter}
              letter={letter.toUpperCase()}
              onClick={handleLetterSelect}
            />
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
};
