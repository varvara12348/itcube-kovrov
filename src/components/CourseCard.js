import React, { useState } from 'react';

const CourseCard = ({ title, description, icon, level }) => {
    const [showDetails, setShowDetails] = useState(false);
    
    const getLevelColor = (level) => {
        switch(level) {
            case 'beginner': return '#4CAF50';
            case 'intermediate': return '#FF9800';
            case 'advanced': return '#f44336';
            default: return '#9E9E9E';
        }
    };
    
    const getLevelText = (level) => {
        switch(level) {
            case 'beginner': return 'Начальный';
            case 'intermediate': return 'Средний';
            case 'advanced': return 'Продвинутый';
            default: return 'Не указан';
        }
    };
    
    return (
        <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            borderTop: `5px solid ${getLevelColor(level)}`
        }}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '3rem' }}>{icon}</span>
            </div>
            
            <h3 style={{ marginBottom: '10px' }}>{title}</h3>
            
            <div style={{
                display: 'inline-block',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                backgroundColor: getLevelColor(level) + '20',
                color: getLevelColor(level),
                marginBottom: '15px'
            }}>
                Уровень: {getLevelText(level)}
            </div>
            
            <p style={{ opacity: 0.7 }}>{description}</p>
            
            <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#2a8cba',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    padding: '5px 0',
                    marginTop: '10px'
                }}
            >
                {showDetails ? 'Скрыть подробности' : 'Показать подробности'}
            </button>
            
            {/* Условный рендеринг с логическим оператором && */}
            {showDetails && (
                <div style={{
                    marginTop: '15px',
                    padding: '15px',
                    background: '#f8f9fa',
                    borderRadius: '5px'
                }}>
                    <p style={{ margin: 0 }}>
                        <strong>Длительность:</strong> 72 часа<br />
                        <strong>Возраст:</strong> 12-17 лет<br />
                        <strong>Группа:</strong> до 12 человек<br />
                        <strong>Преподаватель:</strong> Иванов И.И.
                    </p>
                </div>
            )}
            
            {/* Условный рендеринг с тернарным оператором */}
            <div style={{ marginTop: '15px' }}>
                <button style={{
                    width: '100%',
                    padding: '10px',
                    background: showDetails ? '#f44336' : '#2a8cba',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    {showDetails ? 'Закрыть' : 'Записаться на курс'}
                </button>
            </div>
        </div>
    );
};

export default CourseCard;