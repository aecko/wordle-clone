import UIProvider from "./util/contexts/UIContext";
import { Game } from "./game";
import { WordProvider } from "./util/contexts/WordContext";
import { colours } from "./util/theme/colors";

const App: React.FC = () => {
  return (
    <UIProvider>
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
            style={{ height: "auto", width: "9rem" }}
          />
          <h2
            style={{
              color: colours.white,
              fontSize: "1.5rem",
              alignSelf: "center",
            }}
          >
            Guess the word!
          </h2>
          <Game />
        </div>
      </WordProvider>
    </UIProvider>
  );
};

export default App;
