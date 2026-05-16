import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions/productActions';

const ProductPagination = () => {
    const dispatch = useDispatch();
    const { count, limit, page } = useSelector((state) => state.products);
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(count / limit); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <button 
                    key={number}
                    onClick={() => dispatch(setPage(number))}
                    className={page === number ? 'active' : ''}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default ProductPagination;