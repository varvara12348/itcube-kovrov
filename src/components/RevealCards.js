import React from 'react';
import { Fade, Zoom, Flip, Rotate, Bounce, Slide, LightSpeed, JackInTheBox, Roll, Swing } from 'react-reveal';

const RevealCards = () => {
    const courses = [
        { id: 1, title: 'Программирование на Python', icon: '🐍', desc: 'Изучение основ Python', color: '#1a5f7a' },
        { id: 2, title: 'Мобильная разработка', icon: '📱', desc: 'Создание приложений для Android', color: '#2a8cba' },
        { id: 3, title: 'Робототехника', icon: '🤖', desc: 'Сборка и программирование роботов', color: '#57c5f7' },
        { id: 4, title: 'Веб-разработка', icon: '🌐', desc: 'Создание сайтов на React', color: '#0ea5e9' },
        { id: 5, title: 'Кибербезопасность', icon: '🔒', desc: 'Защита информации', color: '#1a5f7a' },
        { id: 6, title: 'VR/AR разработка', icon: '🥽', desc: 'Виртуальная реальность', color: '#2a8cba' }
    ];

    const styles = {
        container: {
            padding: '40px 20px',
            textAlign: 'center'
        },
        title: {
            color: '#1a5f7a',
            marginBottom: '40px',
            fontSize: '2rem'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
        },
        card: {
            padding: '30px',
            borderRadius: '15px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            cursor: 'pointer'
        },
        icon: {
            fontSize: '3rem',
            marginBottom: '15px'
        },
        titleCard: {
            fontSize: '1.3rem',
            marginBottom: '10px'
        },
        desc: {
            fontSize: '0.9rem',
            opacity: 0.9
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🎯 Наши направления с анимацией</h2>
            <div style={styles.grid}>
                <Fade left>
                    <div style={{ ...styles.card, background: courses[0].color }}>
                        <div style={styles.icon}>{courses[0].icon}</div>
                        <h3 style={styles.titleCard}>{courses[0].title}</h3>
                        <p style={styles.desc}>{courses[0].desc}</p>
                    </div>
                </Fade>

                <Zoom>
                    <div style={{ ...styles.card, background: courses[1].color }}>
                        <div style={styles.icon}>{courses[1].icon}</div>
                        <h3 style={styles.titleCard}>{courses[1].title}</h3>
                        <p style={styles.desc}>{courses[1].desc}</p>
                    </div>
                </Zoom>

                <Flip top>
                    <div style={{ ...styles.card, background: courses[2].color }}>
                        <div style={styles.icon}>{courses[2].icon}</div>
                        <h3 style={styles.titleCard}>{courses[2].title}</h3>
                        <p style={styles.desc}>{courses[2].desc}</p>
                    </div>
                </Flip>

                <Rotate>
                    <div style={{ ...styles.card, background: courses[3].color }}>
                        <div style={styles.icon}>{courses[3].icon}</div>
                        <h3 style={styles.titleCard}>{courses[3].title}</h3>
                        <p style={styles.desc}>{courses[3].desc}</p>
                    </div>
                </Rotate>

                <Bounce>
                    <div style={{ ...styles.card, background: courses[4].color }}>
                        <div style={styles.icon}>{courses[4].icon}</div>
                        <h3 style={styles.titleCard}>{courses[4].title}</h3>
                        <p style={styles.desc}>{courses[4].desc}</p>
                    </div>
                </Bounce>

                <Slide left>
                    <div style={{ ...styles.card, background: courses[5].color }}>
                        <div style={styles.icon}>{courses[5].icon}</div>
                        <h3 style={styles.titleCard}>{courses[5].title}</h3>
                        <p style={styles.desc}>{courses[5].desc}</p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default RevealCards;