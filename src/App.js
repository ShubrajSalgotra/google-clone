import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/search" element = {<SearchPage/>}/>
        </Routes>
      </Router>
    </div>

  );
}