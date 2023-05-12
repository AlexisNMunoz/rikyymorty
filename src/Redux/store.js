import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import thunkMiddleware from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

//export default store;