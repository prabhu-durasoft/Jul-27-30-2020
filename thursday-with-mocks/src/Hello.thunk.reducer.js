import { createStore, applyMiddleware } from "redux";
import thunk  from  'redux-thunk';

const initialState = {
    data: null,
    loading: false
}

const helloReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING': 
            return {...state, loading: true }
        case 'SUCCESS':
            return { ... state, data: action.payload.data, loading: false };
        case 'FAILURE':
            return { ... state, data: action.payload.error, loading: false };
        default:
            return state;
    }
};

export default createStore(helloReducer, applyMiddleware(thunk));