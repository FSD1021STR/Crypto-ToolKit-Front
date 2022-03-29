import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./routes.js";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navigator />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
