import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MotionConfig } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <MotionConfig reducedMotion="user"><App /></MotionConfig>
      </BrowserRouter>
    </React.StrictMode>
  );
}
