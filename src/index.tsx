import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from './Store/config';



ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <AppRoutes/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
