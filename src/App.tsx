import { Keyboard } from "./keyboard";

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignSelf: "stretch",
        justifySelf: "stretch",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Keyboard />
    </div>
  );
};

export default App;
