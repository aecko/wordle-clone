import { useContext, useEffect, useState } from "react";
import { UIContext } from "../../util/contexts/UIContext";
import { TileStates } from "../../util/consts/TileStates";
import { WordContext } from "../../util/contexts/WordContext";
import { LetterTileContainer } from "./style";

interface ILetterTileProps {
  letter: string;
  onClick: (letter: string) => void;
}

export const LetterTile: React.FC<ILetterTileProps> = ({ letter, onClick }) => {
  const { greenLetters, yellowLetters, greyLetters } = useContext(WordContext);
  const { isMobile } = useContext(UIContext);
  const [colorState, setColorState] = useState(TileStates.UNSELECTED);

  useEffect(() => {
    if (greenLetters.includes(letter)) {
      setColorState(TileStates.CORRECT);
    } else if (yellowLetters.includes(letter)) {
      setColorState(TileStates.PARTIAL);
    } else if (greyLetters.includes(letter)) {
      setColorState(TileStates.INCORRECT);
    } else {
      setColorState(TileStates.UNSELECTED);
    }
  }, [greenLetters, yellowLetters, greyLetters, letter]);

  return (
    <LetterTileContainer
      onClick={() => onClick(letter)}
      state={colorState}
      isMobile={isMobile}
    >
      {letter}
    </LetterTileContainer>
  );
};
