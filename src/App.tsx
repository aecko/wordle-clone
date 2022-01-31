import { GameBoard } from "./gameBoard";
import { Keyboard } from "./keyboard";
import { WordProvider } from "./util/contexts/WordContext";

const App: React.FC = () => {
  return (
    <WordProvider>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          alignSelf: "stretch",
          justifySelf: "stretch",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          flexDirection: "column",
        }}
      >
        <GameBoard />
        <Keyboard />
      </div>
    </WordProvider>
  );
};

export default App;
