import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';
import App from './App.jsx'; 
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/truck-camper">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

