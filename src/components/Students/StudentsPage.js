import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import StudentPagination from './StudentPagination';
import AddStudentBootstrap from './AddStudentBootstrap';
import AddStudentHookForm from './AddStudentHookForm';

// Временные данные (пока без сервера)
const initialStudents = [
    { id: 1, name: 'Иванов Иван', age: 14, course: 'Python', enrollDate: '2024-09-01', group: 'ИТ-23' },
    { id: 2, name: 'Петрова Анна', age: 13, course: 'Мобильная разработка', enrollDate: '2024-09-01', group: 'МОБ-23' },
    { id: 3, name: 'Сидоров Петр', age: 15, course: 'Робототехника', enrollDate: '2024-09-01', group: 'РОБ-23' },
    { id: 4, name: 'Кузнецова Елена', age: 12, course: 'Веб-разработка', enrollDate: '2024-09-01', group: 'ВЕБ-23' },
    { id: 5, name: 'Смирнов Дмитрий', age: 16, course: 'Кибербезопасность', enrollDate: '2024-09-01', group: 'КИБ-23' },
    { id: 6, name: 'Васильева Мария', age: 14, course: 'Python', enrollDate: '2024-09-01', group: 'ИТ-23' },
    { id: 7, name: 'Попов Артем', age: 13, course: 'Мобильная разработка', enrollDate: '2024-09-01', group: 'МОБ-23' },
];

const StudentsPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalStudents, setTotalStudents] = useState(0);
    const studentsPerPage = 3;
    
    useEffect(() => {
        // Загрузка данных (имитация)
        setTotalStudents(initialStudents.length);
        const start = (currentPage - 1) * studentsPerPage;
        const end = start + studentsPerPage;
        setStudents(initialStudents.slice(start, end));
        setLoading(false);
    }, [currentPage]);
    
    const handleAddStudent = (newStudent) => {
        const newId = initialStudents.length + 1;
        const studentWithId = { ...newStudent, id: newId };
        initialStudents.push(studentWithId);
        setTotalStudents(initialStudents.length);
        setCurrentPage(Math.ceil(initialStudents.length / studentsPerPage));
        alert('Ученик добавлен!');
    };
    
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#1a5f7a' }}>IT-куб Ковров</h1>
            <h2 style={{ textAlign: 'center', color: '#2a8cba' }}>Наши ученики</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <AddStudentBootstrap onAdd={handleAddStudent} />
                <AddStudentHookForm onAdd={handleAddStudent} />
            </div>
            
            <StudentList students={students} loading={loading} />
            <StudentPagination 
                total={totalStudents}
                perPage={studentsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default StudentsPage;