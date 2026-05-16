import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students, loading }) => {
    if (loading) return <h2 style={{ textAlign: 'center' }}>Загрузка списка учеников...</h2>;
    if (students.length === 0) return <h2 style={{ textAlign: 'center' }}>Ученики не найдены</h2>;
    
    return (
        <div>
            <h2 style={{ marginBottom: '20px', color: '#1a5f7a' }}>👨‍🎓 Наши ученики</h2>
            {students.map(student => (
                <StudentCard key={student.id} student={student} />
            ))}
        </div>
    );
};

export default StudentList;