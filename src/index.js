import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { initialState } from './state/reducer';

render(
  <App initialState={initialState} />,
  document.getElementById('root')
);
