import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//* REDUCERS *//
import themeReducer from './reducers/themeReducer';

const reducers = combineReducers({
    theme: themeReducer
});

const makeStore = () => {

    const store = createStore(reducers, composeWithDevTools());

    return store;
}

export const store = createStore(reducers, composeWithDevTools());