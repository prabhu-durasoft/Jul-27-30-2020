import { createStore } from "redux";

const initialState = {
    data: null
}

const helloReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { ... state, data: action.payload.data };
        case 'FAILURE':
            return { ... state, data: action.payload.error };
        default:
            return state;
    }
};

export default createStore(helloReducer);