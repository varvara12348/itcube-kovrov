import React from 'react';
import { Fade, Zoom, Flip, Bounce, Slide, Rotate } from 'react-awesome-reveal';

const ReactReveal = () => {
    const courses = [
        { title: 'Программирование на Python', desc: 'Изучение основ Python', icon: '🐍', color: '#1a5f7a' },
        { title: 'Мобильная разработка', desc: 'Создание приложений для Android', icon: '📱', color: '#2a8cba' },
        { title: 'Робототехника', desc: 'Сборка и программирование роботов', icon: '🤖', color: '#57c5f7' },
        { title: 'Веб-разработка', desc: 'Создание сайтов на React', icon: '🌐', color: '#0ea5e9' }
    ];

    return (
        <div style={{ padding: '20px', margin: '20px 0', background: '#f8f9fa', borderRadius: '15px' }}>
            <h3 style={{ color: '#1a5f7a', textAlign: 'center', marginBottom: '30px' }}>🏆 Почему выбирают IT-куб?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <Fade direction="left">
                    <div style={{ padding: '20px', background: courses[0].color, color: 'white', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem' }}>{courses[0].icon}</div>
                        <h4>{courses[0].title}</h4>
                        <small>{courses[0].desc}</small>
                    </div>
                </Fade>
                <Zoom>
                    <div style={{ padding: '20px', background: courses[1].color, color: 'white', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem' }}>{courses[1].icon}</div>
                        <h4>{courses[1].title}</h4>
                        <small>{courses[1].desc}</small>
                    </div>
                </Zoom>
                <Flip direction="vertical">
                    <div style={{ padding: '20px', background: courses[2].color, color: 'white', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem' }}>{courses[2].icon}</div>
                        <h4>{courses[2].title}</h4>
                        <small>{courses[2].desc}</small>
                    </div>
                </Flip>
                <Bounce>
                    <div style={{ padding: '20px', background: courses[3].color, color: 'white', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem' }}>{courses[3].icon}</div>
                        <h4>{courses[3].title}</h4>
                        <small>{courses[3].desc}</small>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default ReactReveal;