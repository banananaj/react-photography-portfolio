import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
