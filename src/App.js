
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Calculator from './components/Calculator/Calculator';
import TODOlist from './components/TODOlist/TODOlist';

function App() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/features' element={<Features />}>
          <Route path='calculator' element={<Calculator />} />
          <Route path='todolist' element={<TODOlist />} />
        </Route>  
        <Route path='/' element={<Navigate to='/home' />} />
        
      </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
