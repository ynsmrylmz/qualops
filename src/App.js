import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
