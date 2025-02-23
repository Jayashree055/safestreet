import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import DamageReports from './pages/DamageReports';
import Visualizations from './pages/Visualizations';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<DamageReports />} />
        <Route path="/visualizations" element={<Visualizations />} />
      </Routes>
    </Router>
  );
}

export default App;