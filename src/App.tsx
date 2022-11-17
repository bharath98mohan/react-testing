import "./App.css";
import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";

function App() {
  return (
    <div className="App">
      <Application />
      <Counter />
    </div>
  );
}

export default App;
