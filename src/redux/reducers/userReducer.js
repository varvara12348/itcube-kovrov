import { SET_USER, UPDATE_USER_NAME } from '../actions/actionTypes';

const initialState = {
    name: 'Горбунова В.П.',
    group: 'ИРспк-223',
    role: 'student',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload };
        case UPDATE_USER_NAME:
            return { ...state, name: action.payload };
        default:
            return state;
    }
};

export default userReducer;