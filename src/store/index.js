import {bikeReducer, filterReducer, cartReducer} from './reducers';
import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    bikeReducer,
    cartReducer,
    filterReducer
});

export function configureStore (preloadedState) {
    const store = createStore(reducer, preloadedState, composeWithDevTools);
    return store; 
};