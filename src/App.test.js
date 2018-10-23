import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add mock functions for the matchMedia API
window.matchMedia = () => ({
  addListener: () => { },
  removeListener: () => { }
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});