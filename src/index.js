import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'






const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(rootReducer)
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Provider store={store}>
    <App />
    </Provider>

);

reportWebVitals();
