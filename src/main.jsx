/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// eslint-disable-next-line no-unused-vars
import firebaseConfig  from './FirebaseConfig.jsx'
import { store }  from './Store.jsx';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <Provider store={store}>
     <App />
   </Provider>
);
