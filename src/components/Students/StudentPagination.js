import React from 'react';

const StudentPagination = ({ total, perPage, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(total / perPage);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) pages.push(i);
    
    if (pages.length <= 1) return null;
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
                style={{ padding: '8px 16px', borderRadius: '8px', background: currentPage === 1 ? '#ccc' : '#2a8cba', color: 'white', border: 'none', cursor: 'pointer' }}>
                ← Назад
            </button>
            {pages.map(page => (
                <button key={page} onClick={() => onPageChange(page)}
                    style={{ padding: '8px 16px', borderRadius: '8px', background: page === currentPage ? '#1a5f7a' : '#f0f0f0', color: page === currentPage ? 'white' : '#333', border: 'none', cursor: 'pointer' }}>
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pageCount}
                style={{ padding: '8px 16px', borderRadius: '8px', background: currentPage === pageCount ? '#ccc' : '#2a8cba', color: 'white', border: 'none', cursor: 'pointer' }}>
                Вперед →
            </button>
        </div>
    );
};

export default StudentPagination;