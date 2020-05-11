import {BIKE_FILTERS} from '../constants';
import * as TYPES from './types';

const initialState = {
    bikes: [],
    filter: BIKE_FILTERS.ALL,
    cart: []
};
/*
const updateItems = (items, itemId, update) => {
    return items.map(item => {
        if(itemId === )
        return {
            ...item,
            ...update(item)
        };
    })
}*/

export default function (state = initialState, action) {
    switch(action.type) {
        case TYPES.SET_BIKES:
            return{
                ...state,
                bikes: action.bikes
            };
            break;
        case TYPES.SET_FILTER:
            return{
                ...state,
                bikes: action.filter
                };
                break;
            case TYPES.CHECKOUT_CART:
                return{
                    ...state,
                    cart: initialState.cart,
                }
            case TYPES.ADD_TO_CART:
                return {
                    ...state,
                    bikes: state.bikes.map(bike => {
                        if(bike.id === action.bikeId) {
                         return {
                           ...bike,
                            stock: bike.stock -1;
                        }
                    }}),
                    cart: [...state.cart, action.bikeID]
                };
            case TYPES.REMOVE_FROM_CART:
                return {
                    ...state,
                    bikes: []
                    cart: state.cart.filter(bike => bike !== action.bikeId)
                    }
        default:
            return {
                ...state
            }       
    }
    return state;
}
