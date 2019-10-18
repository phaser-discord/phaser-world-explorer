import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

import './polyfills/ArrayFind';

// Only need to wory about basename when not using HashRouter
// const basename = process.env.REACT_APP_BASENAME
const basename = null;

ReactDOM.render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
