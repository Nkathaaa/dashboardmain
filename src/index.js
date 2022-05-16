import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { createStore,applyMiddleware,compose } from 'redux';
import promiseMiddleware from "redux-promise"
import App from './App';
import reducers from "./store/reducers"
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware=composeEnhancers(applyMiddleware(promiseMiddleware))(createStore)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>  

);
