
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Navigator from './routes';
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
