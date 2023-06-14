import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import "./index.css";
import NavCategoryProvider from "./share/context/nav-category-context";
import store from "./store/store";

ReactDOM.render(
  <Provider store = {store}>
  <NavCategoryProvider>
    <App />
  </NavCategoryProvider>
  </Provider>,
  document.getElementById("root")
);
