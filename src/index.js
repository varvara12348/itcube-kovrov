import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';         // Добавить
import '@fontsource/roboto/300.css';                     // Добавить
import '@fontsource/roboto/400.css';                     // Добавить
import '@fontsource/roboto/500.css';                     // Добавить
import '@fontsource/roboto/700.css';                     // Добавить
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);