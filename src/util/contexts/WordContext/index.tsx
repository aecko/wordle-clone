import { createContext, useEffect, useState } from "react";
import { GameStates, IGameStates, TileStates } from "../../consts/TileStates";
import { WORDS } from "../../consts/words";

type LetterTile = {
  letter: string;
  state: number;
};

type Guess = LetterTile[];

export type Guesses = Guess[];

export const WordContext = createContext({
  word: "",
  yellowLetters: "",
  greenLetters: "",
  greyLetters: "",
  guessWord: () => {},
  guesses: [] as Guesses,
  changeGuess: (letter: string) => {},
  gameState: GameStates.PLAYING,
  resetGame: () => {},
});

export const WordProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState("");
  const [yellowLetters, setYellowLetters] = useState("");
  const [greenLetters, setGreenLetters] = useState("");
  const [greyLetters, setGreyLetters] = useState("");
  const [guesses, setGuesses] = useState<Guesses>(Array(5).fill([] as Guess));
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [gameState, setGameState] = useState(0);
  console.log(guesses);

  useEffect(() => {
    generateNewWord();
  }, []);

  const changeGuess = (letter: string) => {
    var tempGuesses = [...guesses];
    var currentGuess = tempGuesses[currentGuessIndex].slice();
    console.log("currentGuess", currentGuess);

    if (currentGuess.length > 0 && letter === "DEL") {
      currentGuess = currentGuess.slice(0, -1);
    } else if (letter !== "DEL" && currentGuess.length < 5) {
      currentGuess.push({ letter, state: TileStates.UNSELECTED });
    }
    tempGuesses[currentGuessIndex] = currentGuess;
    setGuesses(tempGuesses);
  };

  const generateNewWord = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord.toUpperCase());
  };

  const guessWord = () => {
    console.log("SUBMITTED");
    const guessedWord = guesses[currentGuessIndex];
    const guessedWordTemp = guessedWord;
    const guessedWordString = guessedWord.map(({ letter }) => letter).join("");

    var grey = "";
    var green = "";
    var yellow = "";

    if (guessedWord.length !== 5) return null;

    if (guessedWordString === word) {
      setGreenLetters(word);
      setGameState(GameStates.WON);
    } else if (guessedWordString !== word && currentGuessIndex === 4) {
      setGameState(GameStates.LOST);
    } else {
      guessedWord.forEach(({ letter }, index) => {
        if (!word.includes(letter)) {
          grey += letter;
          guessedWordTemp[index].state = TileStates.INCORRECT;
        } else if (word[index] === letter) {
          green += letter;
          guessedWordTemp[index].state = TileStates.CORRECT;
        } else {
          yellow += letter;
          guessedWordTemp[index].state = TileStates.PARTIAL;
        }
      });
      setGreyLetters(greyLetters + grey);
      setGreenLetters(greenLetters + green);
      setYellowLetters(yellowLetters + yellow);
    }
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  const resetGame = () => {
    setGuesses(Array(5).fill([] as Guess));
    setCurrentGuessIndex(0);
    setYellowLetters("");
    setGreenLetters("");
    setGreyLetters("");
    setGameState(GameStates.PLAYING);
    generateNewWord();
  };

  return (
    <WordContext.Provider
      value={{
        word,
        yellowLetters,
        greenLetters,
        greyLetters,
        guessWord,
        guesses,
        changeGuess,
        gameState,
        resetGame,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
