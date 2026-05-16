import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudentHookForm = ({ onAdd }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = (data) => { onAdd(data); reset(); };
    
    return (
        <div style={{ border: '2px solid #28a745', borderRadius: '8px', padding: '20px', marginBottom: '30px' }}>
            <h3 style={{ color: '#28a745', marginBottom: '15px' }}>➕ Добавить ученика - React Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', { required: 'Обязательное поле' })} placeholder="ФИО *" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: errors.name ? '2px solid red' : '1px solid #ddd', borderRadius: '4px' }} />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                
                <input type="number" {...register('age', { required: 'Обязательно', min: 7, max: 18 })} placeholder="Возраст (7-18) *" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                
                <select {...register('course', { required: 'Обязательно' })} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}>
                    <option value="">Выберите направление</option>
                    <option>Python</option><option>Мобильная разработка</option>
                    <option>Робототехника</option><option>Веб-разработка</option><option>Кибербезопасность</option>
                </select>
                
                <input type="date" {...register('enrollDate', { required: 'Обязательно' })} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }} />
                
                <input {...register('group', { required: 'Обязательно' })} placeholder="Группа *" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }} />
                
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Добавить ученика
                </button>
            </form>
        </div>
    );
};

export default AddStudentHookForm;