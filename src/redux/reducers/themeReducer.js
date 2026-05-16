import { SET_THEME, TOGGLE_THEME } from '../actions/actionTypes';

const initialState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return { theme: action.payload };
        case TOGGLE_THEME:
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
};

export default themeReducer;