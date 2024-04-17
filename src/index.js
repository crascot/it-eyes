import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const ThemeContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContext.Provider>
    <App />
  </ThemeContext.Provider>
);