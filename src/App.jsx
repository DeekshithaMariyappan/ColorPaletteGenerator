import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColorPalette from './components/ColorPalette';
import SavedPalette from './components/SavedPalette';
import ApplyPalette from './components/ApplyPalette';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorPalette />} />
        <Route path="/savedPalette" element={<SavedPalette />} />
        <Route path="/applyPalette" element={<ApplyPalette />} />
      </Routes>
    </Router>
  );
};
export default App;

