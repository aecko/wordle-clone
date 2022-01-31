import { createContext, useState } from "react";

export const WordContext = createContext({
  word: "",
  generateNewWord: () => {},
  yellowLetters: [] as string[],
  greenLetters: [] as string[],
  greyLetters: [] as string[],
  guessWord: (guessedWord: string) => {},
  guesses: [] as string[],
  changeGuess: (letter: string) => {},
});

export const WordProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState("WORDS");
  const [yellowLetters, setYellowLetters] = useState([] as string[]);
  const [greenLetters, setGreenLetters] = useState([] as string[]);
  const [greyLetters, setGreyLetters] = useState([] as string[]);
  const [guesses, setGuesses] = useState(Array(5).fill(""));
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  const changeGuess = (letter: string) => {
    var tempGuesses: string[] = [...guesses];
    var currentGuess = tempGuesses[currentGuessIndex];

    if (currentGuess.length > 0 && letter === "DEL") {
      currentGuess = currentGuess.slice(0, -1);
    } else if (letter !== "DEL") {
      currentGuess += letter;
    }

    console.log("currentGuess", currentGuess);
    console.log("letter", letter);
    tempGuesses[currentGuessIndex] = currentGuess;
    setGuesses(tempGuesses);
  };

  const generateNewWord = () => {
    const newWord = "";
    setWord(newWord);
  };

  const guessWord = (guessedWord: string) => {
    setCurrentGuessIndex(currentGuessIndex + 1);

    if (guessedWord === word) {
      setGreenLetters(word.split(""));
    } else {
      guessedWord.split("").forEach((letter, index) => {
        if (!word.includes(letter)) {
          setGreyLetters([...greyLetters, letter]);
          return null;
        }

        if (word[index] === letter) {
          setGreenLetters(greenLetters.concat(letter));
          return null;
        }
        setYellowLetters(yellowLetters.concat(letter));
      });
    }
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
