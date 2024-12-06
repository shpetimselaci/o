import reactLogo from "../public/o.svg";
import "./App.css";

function App() {
  return (
    <>
      <div style={{}}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <br />
        <code style={{ fontSize: 10 }}>
          <strong style={{ fontSize: 24 }}>O</strong> <br /> is a company
          building for the cutting edge labeling technology which will transform
          industries and generations to come.
        </code>
      </div>

      <footer style={{ marginTop: "auto", display: "block" }}>
        <code style={{ fontSize: 9 }}>
          <strong style={{ fontSize: 10 }}>O</strong> © 2024.
        </code>
      </footer>
    </>
  );
}

export default App;
