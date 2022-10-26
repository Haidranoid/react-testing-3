import rootReducer from '../src/reducers';
import {createStore, applyMiddleware} from "redux";

import {middlewares} from "../src/configureStore";

export const storeFactory = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`)
}