import React, { useState } from 'react';
import CourseCard from './CourseCard';

const CoursesList = () => {
    const [filter, setFilter] = useState('all');
    
    const courses = [
        {
            id: 1,
            title: 'Python для начинающих',
            description: 'Изучение основ программирования на Python',
            icon: '🐍',
            level: 'beginner'
        },
        {
            id: 2,
            title: 'Мобильная разработка',
            description: 'Создание мобильных приложений на Kotlin',
            icon: '📱',
            level: 'intermediate'
        },
        {
            id: 3,
            title: 'Робототехника',
            description: 'Программирование роботов на C++',
            icon: '🤖',
            level: 'advanced'
        },
        {
            id: 4,
            title: 'Веб-разработка',
            description: 'HTML, CSS, JavaScript',
            icon: '🌐',
            level: 'beginner'
        },
        {
            id: 5,
            title: 'Кибербезопасность',
            description: 'Основы защиты информации',
            icon: '🔒',
            level: 'advanced'
        }
    ];
    
    // Фильтрация с использованием тернарного оператора
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.level === filter);
    
    return (
        <div style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                Наши направления
            </h2>
            
            {/* Фильтры */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '40px'
            }}>
                {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                    <button
                        key={level}
                        onClick={() => setFilter(level)}
                        style={{
                            padding: '10px 20px',
                            background: filter === level ? '#2a8cba' : '#f0f0f0',
                            color: filter === level ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: filter === level ? 'bold' : 'normal'
                        }}
                    >
                        {level === 'all' && 'Все'}
                        {level === 'beginner' && 'Начальный'}
                        {level === 'intermediate' && 'Средний'}
                        {level === 'advanced' && 'Продвинутый'}
                    </button>
                ))}
            </div>
            
            {/* Условный рендеринг: показываем сообщение, если нет курсов */}
            {filteredCourses.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    background: '#f8f9fa',
                    borderRadius: '10px'
                }}>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                        Нет курсов с выбранным уровнем сложности
                    </p>
                </div>
            ) : (
                /* Отображение курсов в цикле с использованием map */
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {filteredCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            icon={course.icon}
                            level={course.level}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesList;