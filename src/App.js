import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
 
  return (
    <div>
      <div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        
      </div>
    </div>
  );

  
}

export default App;
