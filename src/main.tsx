import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Style/Modules/Global";
import { Provider } from "react-redux";
import rootReducer from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={rootReducer}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
