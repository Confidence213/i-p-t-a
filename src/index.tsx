import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";

import App from "./App";

import { setupStore } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setupStore();

root.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
