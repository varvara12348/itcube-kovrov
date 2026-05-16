import React from 'react';
import Card from './Card';
import Button from './Button';
import { useTheme, useUser } from '../context';

const Courses = () => {
    const { theme } = useTheme();
    
    const courses = [
        { id: 1, title: 'Python для начинающих', icon: '🐍', level: 'beginner' },
        { id: 2, title: 'Мобильная разработка', icon: '📱', level: 'intermediate' },
        { id: 3, title: 'Робототехника', icon: '🤖', level: 'advanced' },
        { id: 4, title: 'Веб-разработка', icon: '🌐', level: 'beginner' },
        { id: 5, title: 'Кибербезопасность', icon: '🔒', level: 'advanced' }
    ];
    
    const styles = {
        section: {
            padding: '60px 20px',
            background: theme === 'light' ? '#f5f5f5' : '#34495e',
            transition: 'all 0.3s ease'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        title: {
            textAlign: 'center',
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '40px',
            fontSize: '2rem'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
        },
        userBadge: {
            textAlign: 'center',
            marginBottom: '20px',
            padding: '10px',
            background: theme === 'light' ? '#e3f2fd' : '#2c3e50',
            borderRadius: '5px',
            color: theme === 'light' ? '#333' : '#ecf0f1'
        }
    };
    
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                
                <h2 style={styles.title}>Наши направления</h2>
                
                <div style={styles.grid}>
                    {courses.map(course => (
                        <Card key={course.id} title={course.title} icon={course.icon}>
                            <p>Уровень: {course.level}</p>
                            <Button variant="secondary">Подробнее</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;