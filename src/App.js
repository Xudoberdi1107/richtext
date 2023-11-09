import "./App.css";
import Richtext from "./components/Richtext";

function App() {
  const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };
  return (
    <div className="App">
      <Richtext />
    </div>
  );
}

export default App;
