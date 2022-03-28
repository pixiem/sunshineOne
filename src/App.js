import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import ForgetPass from './Component/ForgetPass/ForgetPass';
import AdninPAage from './Component/AdminPage/AdminPAge';
import Indian from './Component/Indian/Indian';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forgetpassword" element={<ForgetPass />} />
      <Route path="/adminControlPanel" element={<AdninPAage />} />
      <Route path="/indian" element={<Indian />} />
      
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
