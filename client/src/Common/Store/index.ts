import {
    createStore,
    applyMiddleware,
    compose,
    Middleware,
    Unsubscribe,
    Reducer,
    Action,
} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { rootReducer, RootState } from "./rootReducer";

export type GetState = () => RootState;
export type ThunkAction<R> = (dispatch: Dispatch, getState: GetState) => R;

export interface PromiseAction<R> extends Action {
    payload: Promise<R>;
    meta?: any;
}

interface PromiseActionResultContainer<R> {
    action: PromiseAction<R>;
    value: R;
}

export type PromiseActionResult<R> = Promise<PromiseActionResultContainer<R>>;

export interface Dispatch {
    // Promise Action
    <R>(asyncAction: PromiseAction<R>): PromiseActionResult<R>;

    // Thunk Action
    <R>(asyncAction: ThunkAction<R>): R;

    // Action Literal
    <A>(action: A): A;
}

export interface Store {
    dispatch: Dispatch;
    getState(): RootState;
    subscribe(listener: () => void): Unsubscribe;
    replaceReducer(nextReducer: Reducer<RootState>): void;
}

export function configureStore() {
    // configure middlewares
    const middlewares: Middleware[] = [thunk, promise];

    if (process.env.NODE_ENV !== "production") {
        const { createLogger } = require("redux-logger");

        // Collapse actions that don't have errors
        const logger = createLogger({
            collapsed: (getState, action, logEntry) => !logEntry.error,
        });

        middlewares.push(logger);
    }

    // compose enhancers
    const enhancer = compose(applyMiddleware(...middlewares));

    const initialState: RootState = { menuItems: [] };

    // create store
    return createStore(rootReducer, initialState, enhancer) as Store;
}
