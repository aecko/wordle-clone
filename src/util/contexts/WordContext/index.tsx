import { createContext, useState } from "react";

export const WordContext = createContext({
  word: "",
  generateNewWord: () => {},
  yellowLetters: [] as string[],
  greenLetters: [] as string[],
  greyLetters: [] as string[],
  guessWord: (guessedWord: string) => {},
  guesses: [] as string[],
});

export const WordProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState("");
  const [yellowLetters, setYellowLetters] = useState([] as string[]);
  const [greenLetters, setGreenLetters] = useState([] as string[]);
  const [greyLetters, setGreyLetters] = useState([] as string[]);
  const [guesses, setGuesses] = useState([] as string[]);

  const generateNewWord = () => {
    const newWord = "";
    setWord(newWord);
  };

  const guessWord = (guessedWord: string) => {
    setGuesses([...guesses, guessedWord]);

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
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
