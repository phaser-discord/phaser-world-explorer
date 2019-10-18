import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Add mock functions for the matchMedia API
window.matchMedia = () => ({
  addListener: () => {},
  removeListener: () => {}
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter basename={null}>
      <App />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
