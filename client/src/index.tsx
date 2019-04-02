import * as dotenv from "dotenv";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "@src/Common/Reducers/RootReducer";
import Sidebar from "@src/Common/Components/Sidebar";
import { devToolsEnhancer } from "redux-devtools-extension";

dotenv.config();

const store = createStore(rootReducer, devToolsEnhancer({}));
ReactDom.render(
  <Provider store={store}>
    <Sidebar />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
