import './App.css';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
 
    const navigate = useNavigate();

  const navigateToMain = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };

  const navigateToCart = () => {
    // 👇️ navigate to /
    navigate('/cart');
  };

  return (
    <div>
      <div>

        <Routes>
          <Route path="/" element={<MainPage func={navigateToCart}/>} />
          <Route path="/cart" element={<CartPage func={navigateToMain}/>} />
        </Routes>

        
      </div>
    </div>
  );

  
}

export default App;
