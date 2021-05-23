import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// Import for Redux Setting *****************
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Redux Setting END *****************

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);