import { useContext } from "react";
import { UIContext } from "../util/contexts/UIContext";
import { GameBoard } from "../gameBoard";
import { Keyboard } from "../keyboard";
import { GameStates } from "../util/consts/TileStates";
import { WordContext } from "../util/contexts/WordContext";
import { GameInfo } from "./gameInfo";
import { GameContainer, HintButton } from "./style";
import { colours } from "../util/theme/colors";

export const Game: React.FC = () => {
  const {
    guesses,
    changeGuess,
    guessWord,
    gameState,
    resetGame,
    word,
    currentGuessIndex,
    setupDailyChallenge,
    playingDailyChallenge,
  } = useContext(WordContext);
  const { isMobile } = useContext(UIContext);
  return (
    <GameContainer isMobile={isMobile}>
      {gameState !== GameStates.PLAYING && (
        <GameInfo
          gameState={gameState}
          onReset={resetGame}
          gameWord={word}
          guessCount={currentGuessIndex}
          dailyChallenge={playingDailyChallenge}
        />
      )}
      <GameBoard guesses={guesses} />
      {!playingDailyChallenge && (
        <HintButton onClick={() => setupDailyChallenge()}>
          Play Daily Challenge Word
        </HintButton>
      )}
      {playingDailyChallenge && (
        <h2
          style={{
            color: colours.white,
            fontSize: "1rem",
            alignSelf: "center",
          }}
        >
          Playing the Daily Challenge!
        </h2>
      )}

      <Keyboard handleKeyPress={changeGuess} handleSubmit={() => guessWord()} />
    </GameContainer>
  );
};
