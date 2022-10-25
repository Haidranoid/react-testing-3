import rootReducer from '../src/reducers';
import {createStore} from "redux";

export const storeFactory = (initialState = {}) => {
    return createStore(rootReducer, initialState)
}

export const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`)
}