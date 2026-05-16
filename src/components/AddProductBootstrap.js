import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';

const AddProductBootstrap = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', description: '', price: '', category: '' });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(form));
        setForm({ name: '', description: '', price: '', category: '' });
    };
    
    return (
        <form onSubmit={handleSubmit} className="card p-4">
            <h3>Добавить товар (Bootstrap)</h3>
            <input className="form-control my-2" placeholder="Название" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <textarea className="form-control my-2" placeholder="Описание" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
            <input className="form-control my-2" placeholder="Цена" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
            <input className="form-control my-2" placeholder="Категория" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
            <button className="btn btn-primary">Добавить</button>
        </form>
    );
};

export default AddProductBootstrap;