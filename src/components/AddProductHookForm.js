import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';

const AddProductHookForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ border: '2px solid #28a745', padding: '20px', borderRadius: '10px' }}>
            <h3>Добавить товар (React Hook Form)</h3>
            <input {...register('name', { required: 'Обязательно' })} placeholder="Название" />
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            <textarea {...register('description')} placeholder="Описание" />
            <input {...register('price', { required: 'Обязательно' })} placeholder="Цена" />
            <input {...register('category', { required: 'Обязательно' })} placeholder="Категория" />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddProductHookForm;