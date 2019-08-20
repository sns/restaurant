import * as dotenv from "dotenv"
import * as React from "react"
import * as ReactDom from "react-dom"
import { Provider } from "react-redux"
import { configureStore } from "./Common/Store"
import App from "./App"
// import { createStore } from "redux";
// import { rootReducer } from "@src/Common/Store/RootReducer";
// import { devToolsEnhancer } from "redux-devtools-extension";

dotenv.config()

// const store = createStore(rootReducer, devToolsEnhancer({}));
const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
)
