import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import userReducer from './userReducer';
import courseReducers from './courseReducers';

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    courses: courseReducers
});

export default rootReducer;