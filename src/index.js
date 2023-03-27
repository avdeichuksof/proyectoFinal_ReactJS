import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxHVtORU7ufmLIPekf_C8LJpeeDbcGB0U",
    authDomain: "proyecto-react-94d75.firebaseapp.com",
    projectId: "proyecto-react-94d75",
    storageBucket: "proyecto-react-94d75.appspot.com",
    messagingSenderId: "937696675161",
    appId: "1:937696675161:web:d33b481a1509e44a723848"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
