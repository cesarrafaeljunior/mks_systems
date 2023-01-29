import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Style/Modules/Global/global";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
