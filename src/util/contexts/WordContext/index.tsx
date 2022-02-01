import { createContext, useState } from "react";
import { TileStates } from "../../consts/TileStates";

type LetterTile = {
  letter: string;
  state: number;
};

type Guess = LetterTile[];

export type Guesses = Guess[];

export const WordContext = createContext({
  word: "",
  generateNewWord: () => {},
  yellowLetters: [] as string[],
  greenLetters: [] as string[],
  greyLetters: [] as string[],
  guessWord: () => {},
  guesses: [] as Guesses,
  changeGuess: (letter: string) => {},
});

export const WordProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState("WORDS");
  const [yellowLetters, setYellowLetters] = useState([] as string[]);
  const [greenLetters, setGreenLetters] = useState([] as string[]);
  const [greyLetters, setGreyLetters] = useState([] as string[]);
  const [guesses, setGuesses] = useState<Guesses>(Array(5).fill([] as Guess));
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  console.log(guesses);

  const changeGuess = (letter: string) => {
    var tempGuesses = [...guesses];
    var currentGuess = tempGuesses[currentGuessIndex].slice();
    console.log("currentGuess", currentGuess);

    if (currentGuess.length > 0 && letter === "DEL") {
      currentGuess = currentGuess.slice(0, -1);
    } else if (letter !== "DEL") {
      currentGuess.push({ letter, state: TileStates.UNSELECTED });
    }
    tempGuesses[currentGuessIndex] = currentGuess;
    setGuesses(tempGuesses);
  };

  const generateNewWord = () => {
    const newWord = "";
    setWord(newWord);
  };

  const guessWord = () => {
    console.log("SUBMITTED");
    const guessedWord = guesses[currentGuessIndex];
    const guessedWordTemp = guessedWord;
    const guessedWordString = guessedWord.map(({ letter }) => letter).join("");
    if (guessedWord.length !== 5) return null;

    if (guessedWordString === word) {
      setGreenLetters(word.split(""));
    } else {
      guessedWord.forEach(({ letter }, index) => {
        if (!word.includes(letter)) {
          setGreyLetters([...greyLetters, letter]);
          guessedWordTemp[index].state = TileStates.WRONG;
        } else if (word[index] === letter) {
          setGreenLetters(greenLetters.concat(letter));
          guessedWordTemp[index].state = TileStates.CORRECT;
        } else {
          setYellowLetters(yellowLetters.concat(letter));
          guessedWordTemp[index].state = TileStates.PARTIAL;
        }
      });
    }
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  return (
    <WordContext.Provider
      value={{
        word,
        generateNewWord,
        yellowLetters,
        greenLetters,
        greyLetters,
        guessWord,
        guesses,
        changeGuess,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
