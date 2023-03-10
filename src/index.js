import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheets/animations.css'
import '@fontsource/ibm-plex-sans-condensed';
import '@fontsource/inter-tight';
import '@fontsource/teko';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
