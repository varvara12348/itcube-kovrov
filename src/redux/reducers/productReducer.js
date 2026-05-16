const initialState = {
    products: [],
    loading: false,
    error: null,
    page: 1,
    limit: 3,
    count: 0
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return { ...state, loading: true, error: null };
            
        case 'FETCH_PRODUCTS_SUCCESS':
            return { 
                ...state, 
                loading: false, 
                products: Array.isArray(action.payload) ? action.payload : []
            };
            
        case 'FETCH_PRODUCTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
            
        case 'SET_PAGE':
            return { ...state, page: action.payload };
            
        case 'SET_COUNT':
            return { ...state, count: action.payload };
            
        case 'ENROLL_PRODUCT':
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === action.payload ? { ...p, enrolled: true } : p
                )
            };
            
        case 'ADD_PRODUCT_REQUEST':
            return { ...state, loading: true };
            
        case 'ADD_PRODUCT_SUCCESS':
            return { ...state, loading: false };
            
        case 'ADD_PRODUCT_FAILURE':
            return { ...state, loading: false, error: action.payload };
            
        default:
            return state;
    }
};

export default productReducer;