import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Navbar />
            <div className="container max-w-none">
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
               </Routes>
            </div>
         </Router>
      </Provider>
   );
}

export default App;
