import * as dotenv from "dotenv";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";

import "./Style/Site.css";
import "./Style/flexboxgrid.css";

import { configureStore } from "./Common/Store";
import NavBar from "@src/Common/Components/NavBar";

dotenv.config();

// const store = createStore(rootReducer, devToolsEnhancer({}));
const store = configureStore();
ReactDom.render(
  <Provider store={store}>
    <NavBar />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
