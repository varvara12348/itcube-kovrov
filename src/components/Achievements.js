import React, { useState } from 'react';
import AchievementCard from './AchievementCard';

const Achievements = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    // Массив с данными для передачи
    const achievements = [
        {
            id: 1,
            title: 'Учеников',
            count: 350,
            icon: '👨‍🎓',
            color: '#2a8cba',
            details: {
                description: 'За все время обучения',
                students: 120,
                projects: 45
            }
        },
        {
            id: 2,
            title: 'Направлений',
            count: 6,
            icon: '📚',
            color: '#4CAF50',
            details: {
                description: 'Актуальных IT-направлений',
                students: 180,
                projects: 12
            }
        },
        {
            id: 3,
            title: 'Побед',
            count: 47,
            icon: '🏆',
            color: '#FF9800',
            details: {
                description: 'В конкурсах и олимпиадах',
                students: 35,
                projects: 47
            }
        },
        {
            id: 4,
            title: 'Проектов',
            count: 89,
            icon: '💻',
            color: '#f44336',
            details: {
                description: 'Реализованных проектов',
                students: 89,
                projects: 89
            }
        }
    ];
    
    return (
        <div style={{ padding: '60px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Наши достижения
                </h2>
                
                <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
                    Наведите на карточку, чтобы увидеть детали
                </p>
                
                {hoveredCard && (
                    <div style={{
                        textAlign: 'center',
                        padding: '10px',
                        marginBottom: '20px',
                        background: '#e3f2fd',
                        borderRadius: '5px'
                    }}>
                        Сейчас вы смотрите: <strong>{hoveredCard}</strong>
                    </div>
                )}
                
                {/* Передача множества параметров в дочерние компоненты */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '25px'
                }}>
                    {achievements.map(item => (
                        <AchievementCard
                            key={item.id}
                            title={item.title}
                            count={item.count}
                            icon={item.icon}
                            color={item.color}
                            isHighlighted={hoveredCard === item.title}
                            details={item.details}
                            onHover={setHoveredCard}
                        />
                    ))}
                </div>
                
                {/* Демонстрация переданных параметров */}
                <div style={{
                    marginTop: '40px',
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '10px'
                }}>
                    <h3>Переданные параметры в компонент AchievementCard:</h3>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        <li><strong>title</strong> (string) - название достижения</li>
                        <li><strong>count</strong> (number) - количество</li>
                        <li><strong>icon</strong> (string) - иконка-эмодзи</li>
                        <li><strong>color</strong> (string) - цвет акцента</li>
                        <li><strong>isHighlighted</strong> (boolean) - подсветка карточки</li>
                        <li><strong>details</strong> (object) - объект с деталями</li>
                        <li><strong>onHover</strong> (function) - обработчик наведения</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Achievements;