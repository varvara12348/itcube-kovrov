import React, { useState } from 'react';

const CourseFilter = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    
    const courses = [
        { id: 1, title: 'Python для начинающих', level: 'beginner', icon: '🐍' },
        { id: 2, title: 'Мобильная разработка', level: 'intermediate', icon: '📱' },
        { id: 3, title: 'Робототехника', level: 'advanced', icon: '🤖' },
        { id: 4, title: 'Веб-разработка', level: 'beginner', icon: '🌐' },
        { id: 5, title: 'Кибербезопасность', level: 'advanced', icon: '🔒' }
    ];
    
    const getLevelColor = (level) => {
        switch(level) {
            case 'beginner': return '#4CAF50';
            case 'intermediate': return '#FF9800';
            case 'advanced': return '#f44336';
            default: return '#999';
        }
    };
    
    const getLevelText = (level) => {
        switch(level) {
            case 'beginner': return 'Начальный';
            case 'intermediate': return 'Средний';
            case 'advanced': return 'Продвинутый';
            default: return 'Все';
        }
    };
    
    const filteredCourses = courses.filter(course => {
        if (filter !== 'all' && course.level !== filter) return false;
        if (search && !course.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });
    
    const styles = {
        container: {
            background: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            margin: '20px auto'
        },
        title: {
            color: '#1a5f7a',
            textAlign: 'center',
            marginBottom: '20px'
        },
        search: {
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '2px solid #e0e0e0',
            borderRadius: '5px',
            fontSize: '1rem'
        },
        filters: {
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap'
        },
        filterButton: (isActive) => ({
            padding: '8px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            background: isActive ? '#2a8cba' : '#f0f0f0',
            color: isActive ? 'white' : '#333',
            fontWeight: isActive ? 'bold' : 'normal'
        }),
        courseItem: (level) => ({
            padding: '12px',
            marginBottom: '10px',
            background: '#f8f9fa',
            borderLeft: `5px solid ${getLevelColor(level)}`,
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }),
        levelBadge: (level) => ({
            padding: '3px 8px',
            borderRadius: '3px',
            fontSize: '0.8rem',
            background: getLevelColor(level),
            color: 'white'
        })
    };
    
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>📚 Направления IT-куб</h3>
            
            <input
                type="text"
                placeholder="🔍 Поиск курсов..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.search}
            />
            
            <div style={styles.filters}>
                <button 
                    style={styles.filterButton(filter === 'all')}
                    onClick={() => setFilter('all')}
                >
                    Все
                </button>
                <button 
                    style={styles.filterButton(filter === 'beginner')}
                    onClick={() => setFilter('beginner')}
                >
                    Начальный
                </button>
                <button 
                    style={styles.filterButton(filter === 'intermediate')}
                    onClick={() => setFilter('intermediate')}
                >
                    Средний
                </button>
                <button 
                    style={styles.filterButton(filter === 'advanced')}
                    onClick={() => setFilter('advanced')}
                >
                    Продвинутый
                </button>
            </div>
            
            {filteredCourses.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                    Курсы не найдены
                </p>
            ) : (
                <div>
                    {filteredCourses.map(course => (
                        <div key={course.id} style={styles.courseItem(course.level)}>
                            <span style={{ fontSize: '1.5rem' }}>{course.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 'bold' }}>{course.title}</div>
                                <div style={styles.levelBadge(course.level)}>
                                    {getLevelText(course.level)}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <p style={{ marginTop: '15px', color: '#666' }}>
                        Найдено: {filteredCourses.length} из {courses.length}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CourseFilter;