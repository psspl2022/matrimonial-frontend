import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

store.subscribe(() => console.log(store.getState()));

window.AppName = "Namdeo Matrimony";
window.Url = "http://127.0.0.1:8000/";
// window.Url = "https://namdeomatrimony.com/matrimonial-backend/";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();