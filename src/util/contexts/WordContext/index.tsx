import { createContext, useEffect, useState } from "react";
import { GameStates, TileStates } from "../../consts/TileStates";
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
  currentGuessIndex: 0,
  getHint: () => {},
});

export const WordProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState("");
  const [yellowLetters, setYellowLetters] = useState("");
  const [greenLetters, setGreenLetters] = useState("");
  const [greyLetters, setGreyLetters] = useState("");
  const [guesses, setGuesses] = useState<Guesses>(Array(6).fill([] as Guess));
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [gameState, setGameState] = useState(0);
  const [hintIndex, setHintIndex] = useState(0);

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
    const guessedWord = guesses[currentGuessIndex];
    var guessedWordString = "";
    const _ = guessedWord.map(({ letter }) => {
      guessedWordString = guessedWordString + letter.toLowerCase();
    });
    console.log(guessedWordString);
    if (!WORDS.includes(guessedWordString)) return null;
    const guessedWordTemp = guessedWord;

    var grey = greyLetters.split("").join("");
    var green = greenLetters.split("").join("");
    var yellow = yellowLetters.split("").join("");

    if (guessedWord.length !== 5) return null;

    if (guessedWordString === word) {
      setGreenLetters(word);
      setGameState(GameStates.WON);
    } else if (guessedWordString !== word && currentGuessIndex === 5) {
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
          if (!checkIfDuplicate(letter, green)) {
            yellow += letter;
            guessedWordTemp[index].state = TileStates.PARTIAL;
          }
        }
      });
      setGreyLetters(grey);
      setGreenLetters(green);
      setYellowLetters(yellow);
    }
    setHintIndex(0);
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  const checkIfDuplicate = (letter: string, green: string) => {
    var greenCount = 0;

    for (const greenLetter of green) {
      if (greenLetter === letter) {
        greenCount++;
      }
    }

    if (greenCount) {
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setGuesses(Array(6).fill([] as Guess));
    setCurrentGuessIndex(0);
    setYellowLetters("");
    setGreenLetters("");
    setGreyLetters("");
    setGameState(GameStates.PLAYING);
    generateNewWord();
  };

  const getHint = () => {
    const tempGuesses = [...guesses];
    const currentGuess = tempGuesses[currentGuessIndex].slice();
    currentGuess[hintIndex] = {
      letter: word[hintIndex],
      state: TileStates.CORRECT,
    };
    tempGuesses[currentGuessIndex] = currentGuess;
    setHintIndex(hintIndex + 1);
    setGreenLetters(greenLetters + word[hintIndex]);
    setGuesses(tempGuesses);
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
        currentGuessIndex,
        getHint,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
