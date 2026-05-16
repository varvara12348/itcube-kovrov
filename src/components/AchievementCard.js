import React from 'react';

const AchievementCard = ({ 
    title,           // строка
    count,           // число
    icon,            // строка (эмодзи)
    color,           // строка (цвет)
    isHighlighted,   // булево (подсвечен ли)
    details,         // объект с доп. информацией
    onHover          // функция-обработчик
}) => {
    
    const cardStyle = {
        background: isHighlighted ? `${color}20` : 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: isHighlighted ? '0 5px 20px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
        border: `2px solid ${isHighlighted ? color : 'transparent'}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };
    
    return (
        <div 
            style={cardStyle}
            onMouseEnter={() => onHover(title)}
            onMouseLeave={() => onHover(null)}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{icon}</div>
            <h3 style={{ color: color, marginBottom: '5px' }}>{title}</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
                {count}
            </div>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                {details.description}
            </p>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>
                Из них: {details.students} учеников, {details.projects} проектов
            </div>
        </div>
    );
};

export default AchievementCard;