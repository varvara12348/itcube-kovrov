import React from 'react';

const StudentCard = ({ student }) => {
    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            display: 'flex',
            gap: '20px',
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1a5f7a, #2a8cba)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem'
            }}>
                👨‍🎓
            </div>
            <div style={{ flex: 1 }}>
                <h3 style={{ color: '#1a5f7a', margin: '0 0 5px 0' }}>{student.name}</h3>
                <p style={{ color: '#666', margin: '0 0 5px 0' }}>
                    <strong>Возраст:</strong> {student.age} лет
                </p>
                <p style={{ color: '#666', margin: '0 0 5px 0' }}>
                    <strong>Направление:</strong> {student.course}
                </p>
                <p style={{ color: '#666', margin: '0 0 5px 0' }}>
                    <strong>Дата поступления:</strong> {student.enrollDate}
                </p>
                <span style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    background: '#2a8cba',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.8rem'
                }}>
                    {student.group}
                </span>
            </div>
        </div>
    );
};

export default StudentCard;