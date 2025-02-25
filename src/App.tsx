import "./App.css";
import { BrowserRouter } from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <BrowserRouter>
      <List />
    </BrowserRouter>
  );
}

export default App;
