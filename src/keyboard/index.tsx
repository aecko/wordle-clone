import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { LetterTile } from "./letterTile";
import { KeyboardContainer, KeyboardRow } from "./style";

let qwertyKeyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["sub", "z", "x", "c", "v", "b", "n", "m", "del"],
];

interface IKeyboardProps {
  handleKeyPress: (letter: string) => void;
  handleSubmit: () => void;
}

export const Keyboard: React.FC<IKeyboardProps> = ({
  handleKeyPress,
  handleSubmit,
}) => {
  const { isMobile } = useContext(UIContext);
  return (
    <KeyboardContainer isMobile={isMobile}>
      {qwertyKeyboardLetters.map((row) => (
        <KeyboardRow isMobile={isMobile}>
          {row.map((letter) => (
            <LetterTile
              key={letter}
              letter={letter.toUpperCase()}
              onClick={letter !== "sub" ? handleKeyPress : handleSubmit}
            />
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
};
