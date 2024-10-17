import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import db from "./lib/Firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});

await deleteDoc(doc(db, "users", "zj4JaVxs1xChRnlammFP"));