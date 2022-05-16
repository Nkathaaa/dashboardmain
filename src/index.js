import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from 'redux';
import App from './App';
import reducers from "./store/reducers"

const createStoreWithMiddleware=applyMiddleware()(createStore)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>  

);
