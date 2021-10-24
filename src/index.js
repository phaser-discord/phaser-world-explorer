import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

// Only need to wory about basename when not using HashRouter
// const basename = process.env.REACT_APP_BASENAME
const basename = null;

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
