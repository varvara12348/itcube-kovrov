import { call, put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProducts() {
    try {
        const state = yield select(state => state.products);
        const offset = (state.page - 1) * state.limit;
        
        const response = yield call(axios.get, `http://localhost:8080/products/lim?offset=${offset}&limit=${state.limit}`);
        yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data.products });
        
        yield put({ type: 'SET_COUNT', payload: 5 });
        
    } catch (error) {
        yield put({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
}

function* productSaga() {
    yield takeEvery('FETCH_PRODUCTS_REQUEST', fetchProducts);
    yield takeEvery('SET_PAGE', fetchProducts);
}

export default productSaga;