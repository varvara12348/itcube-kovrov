import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import themeReducer from './reducers/themeReducer';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    products: productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// ЭТА СТРОКА НУЖНА ДЛЯ ОТЛАДКИ
window.store = store;

export default store;