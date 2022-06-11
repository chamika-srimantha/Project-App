import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import NavBarHome from './NavBarHome/NavBarHome';
import Register from './Register/Register';


function App() {
  return (
    <div>

      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );

}

export default App;
