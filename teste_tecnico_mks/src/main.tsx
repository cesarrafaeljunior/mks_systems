import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Style/Modules/Global/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
