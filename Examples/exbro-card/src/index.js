import React from 'react';
import App from './App.js';
import ReactDom from 'react-dom/client';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)