import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Features from './components/Features/Features';

function App() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/features' element={<Features />} />
      </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
