import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './app/App';
import "./app/scss/index.scss";
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
