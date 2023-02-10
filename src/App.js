import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/home'} element={<Homepage />} />
        <Route path={'*'} element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
