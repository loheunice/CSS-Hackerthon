import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import db from "./lib/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)