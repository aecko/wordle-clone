import { Game } from "./game";
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
        <Game />
      </div>
    </WordProvider>
  );
};

export default App;
