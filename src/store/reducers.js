import {BIKE_FILTERS} from '../constants';
import * as TYPES from './types';

const initialState = {
    bikes: [],
    filter: BIKE_FILTERS.ALL,
    cart: []
};

const updateItems = (items, itemId, update) => {
    return items.map(item => {
        if(item.id === itemId ) {
            return {
                ...item,
                ...update(item)
            };
        }
        return item;
    });
}

export function bikeReducer (state = initialState.bikes, action) {
    switch (action.type) {
        case TYPES.SET_BIKES:
            return {
                ...state,
                bikes: action.bikes
            };
        case TYPES.ADD_TO_CART:
            return updateItems(state, action.bikeId, item => ({stock: item.stock -1}));
        case TYPES.REMOVE_FROM_CART:
            return updateItems(state, action.bikeId, item => ({stock: item.stock +1}));
        default:
            return state;
    }
}

export function cartReducer (state = initialState.cart, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            return [...state, action.bikeId];
        case TYPES.REMOVE_FROM_CART:
            return state.filter(bike => bike !== action.bikeId);
        case TYPES.CHECKOUT_CART:
            return initialState;
        default:
            return initialState.cart;
    }
}

export function filterReducer (state = initialState.filter, action) {
    switch (action.type) {
        case TYPES.SET_FILTER:
            return action.filter;
                
        default:
            return state;
    }
}