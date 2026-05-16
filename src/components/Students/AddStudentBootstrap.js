import React, { useState } from 'react';

const AddStudentBootstrap = ({ onAdd }) => {
    const [form, setForm] = useState({ name: '', age: '', course: '', enrollDate: '', group: '' });
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({ name: '', age: '', course: '', enrollDate: '', group: '' });
    };
    
    return (
        <div className="card mb-4">
            <div className="card-header bg-primary text-white">
                <h4>➕ Добавить ученика - Bootstrap форма</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" className="form-control mb-2" placeholder="ФИО" value={form.name} onChange={handleChange} required />
                    <input type="number" name="age" className="form-control mb-2" placeholder="Возраст" value={form.age} onChange={handleChange} required />
                    <select name="course" className="form-select mb-2" value={form.course} onChange={handleChange} required>
                        <option value="">Выберите направление</option>
                        <option>Python</option><option>Мобильная разработка</option>
                        <option>Робототехника</option><option>Веб-разработка</option><option>Кибербезопасность</option>
                    </select>
                    <input type="date" name="enrollDate" className="form-control mb-2" value={form.enrollDate} onChange={handleChange} required />
                    <input type="text" name="group" className="form-control mb-2" placeholder="Группа" value={form.group} onChange={handleChange} required />
                    <button type="submit" className="btn btn-primary w-100">Добавить ученика</button>
                </form>
            </div>
        </div>
    );
};

export default AddStudentBootstrap;