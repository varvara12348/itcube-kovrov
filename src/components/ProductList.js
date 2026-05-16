import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const { products, loading, error } = useSelector((state) => state.products);
    
    if (loading) return <div>Загрузка товаров...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    
    return (
        <div className="products-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: {product.price} ₽</p>
                    <p>Категория: {product.category}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;