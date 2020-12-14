import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
});