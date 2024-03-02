import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Імпортуються BrowserRouter з react-router-dom
import HomePage from './pages/HomePage';
import './styles/globals.scss';

const App: React.FC = () => {
  return (
    <Router>
      <HomePage />
    </Router>
  );
};

export default App;