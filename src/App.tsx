import { Game } from "./game";
import { WordProvider } from "./util/contexts/WordContext";
import { colours } from "./util/theme/colors";

const App: React.FC = () => {
  return (
    <WordProvider>
      <div
        style={{
          backgroundColor: colours.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          flexDirection: "column",
          zIndex: "-10",
        }}
      >
        <img
          src={require("./assets/img/logo.png")}
          alt="logo"
          style={{ height: "auto", width: "18rem" }}
        />
        <h1
          style={{
            color: colours.white,
            fontSize: "2rem",
            alignSelf: "center",
          }}
        >
          Guess the word!
        </h1>
        <Game />
      </div>
    </WordProvider>
  );
};

export default App;
