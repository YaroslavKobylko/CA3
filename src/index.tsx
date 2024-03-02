import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmmAte8OqC0gbwuH6kaHyO0auJl1L66o8",
  authDomain: "catalon3-76451.firebaseapp.com",
  projectId: "catalon3-76451",
  storageBucket: "catalon3-76451.appspot.com",
  messagingSenderId: "1084448321331",
  appId: "1:1084448321331:web:76ae03509a6df518fe9846",
  measurementId: "G-WZKECSC361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
