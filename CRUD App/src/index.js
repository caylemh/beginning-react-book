import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNhfAj5ke6jpbew1Jua5UB2F4lkQzXrl8",
  authDomain: "crudproject-d8cda.firebaseapp.com",
  databaseURL: "https://crudproject-d8cda.firebaseio.com",
  projectId: "crudproject-d8cda",
  storageBucket: "crudproject-d8cda.appspot.com",
  messagingSenderId: "866776069195",
  appId: "1:866776069195:web:7fcd461aeea4fad7f4c9ce",
  measurementId: "G-BTWTCQ90C5"
};

firebase.initializeApp(firebaseConfig);

//const database = firebase.database();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
