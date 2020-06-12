import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
