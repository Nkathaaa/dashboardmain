import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";import App from './App';
import ReduxStore from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore()}>
    <App />
  </Provider>  

);
