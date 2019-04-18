import * as dotenv from "dotenv";
import * as React from "react";
import * as ReactDom from "react-dom";
import Sidebar from "@src/Common/Components/Sidebar";
import { Provider } from "react-redux";
import { configureStore } from "./Common/Store";
dotenv.config();

const store = configureStore();
ReactDom.render(
  <Provider store={store}>
    <Sidebar />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
