import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./routes.js";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
