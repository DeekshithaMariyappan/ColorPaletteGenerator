import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import ColorPalette from './components/ColorPalette';
import SavedPalette from './components/SavedPalette';
import ApplyPalette from './components/ApplyPalette';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/colorPalette" element={<ColorPalette />} />
        <Route path="/savedPalette" element={<SavedPalette />} />
        <Route path="/applyPalette" element={<ApplyPalette />} />
      </Routes>
    </Router>
  );
};
export default App;

