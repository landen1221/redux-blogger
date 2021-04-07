import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBox from "./NavBox";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBox />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;


