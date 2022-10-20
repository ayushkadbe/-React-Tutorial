import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Conditionals from './pages/Conditionals';
import Lists from './pages/Lists';
import UseStates from './pages/UseStates';
import UseReducer from './pages/UseReducer';
import UseEffects from './pages/UseEffects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // CONNECT URL AND DEFINE ROUTES in index.js> add LINKS TO WHEREEVER YOU LIKE a onClick else let it.

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='home' element={ <Home />} />
        <Route path='contact' element={ <Contact />} />
        <Route path='header' element={ <Header />} />
        <Route path='conditionals' element={ <Conditionals />} />
        <Route path='Lists' element={ <Lists />} />
        <Route path='UseStates' element={ <UseStates />} />
        <Route path='UseReducer' element={ <UseReducer />} />
        <Route path='UseEffects' element={ <UseEffects />} />
      </Routes>
      
    </BrowserRouter>     
  </React.StrictMode>
);
