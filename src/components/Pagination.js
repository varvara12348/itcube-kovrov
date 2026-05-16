import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions/productActions';

const Pagination = () => {
    const dispatch = useDispatch();
    const { count, limit, page } = useSelector(state => state.products);
    const pageNumbers = [];
    
    console.log('Pagination:', { count, limit, page }); // для проверки
    
    for (let i = 1; i <= Math.ceil(count / limit); i++) {
        pageNumbers.push(i);
    }
    
    if (pageNumbers.length <= 1) {
        return null;
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            <button 
                onClick={() => dispatch(setPage(page - 1))}
                disabled={page === 1}
                style={{
                    padding: '8px 16px',
                    background: page === 1 ? '#ccc' : '#2a8cba',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: page === 1 ? 'not-allowed' : 'pointer'
                }}
            >
                ← Назад
            </button>
            
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => dispatch(setPage(number))}
                    style={{
                        padding: '8px 16px',
                        background: page === number ? '#1a5f7a' : '#f0f0f0',
                        color: page === number ? 'white' : '#333',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    {number}
                </button>
            ))}
            
            <button 
                onClick={() => dispatch(setPage(page + 1))}
                disabled={page === pageNumbers.length}
                style={{
                    padding: '8px 16px',
                    background: page === pageNumbers.length ? '#ccc' : '#2a8cba',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: page === pageNumbers.length ? 'not-allowed' : 'pointer'
                }}
            >
                Вперед →
            </button>
        </div>
    );
};

export default Pagination;