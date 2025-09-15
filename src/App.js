import logo from './logo.svg';
import './App.css';
// import Main from './component/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import LoginPage from "./component/LoginPage";
import SignupPage from './component/SignupPage';

function App() {
// Mock search handler - replace with API call to NAMASTE/ICD-11 TM2
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
