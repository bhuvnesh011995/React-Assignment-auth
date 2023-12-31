import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './wrapper/Auth.context';
import { ThemeProvider } from './wrapper/Thame.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
        <App />
      </AuthProvider>
  </ThemeProvider>
      
  // <React.StrictMode>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
