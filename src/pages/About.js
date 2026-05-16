import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const theme = useSelector(state => state.theme.theme);
    
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 20px'
        },
        title: {
            textAlign: 'center',
            fontSize: '2.5rem',
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '50px',
            position: 'relative',
            paddingBottom: '15px'
        },
        content: {
            background: theme === 'light' ? 'white' : '#2c3e50',
            borderRadius: '10px',
            padding: '40px',
            boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease'
        },
        text: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: theme === 'light' ? '#555' : '#ecf0f1',
            marginBottom: '25px'
        },
        highlight: {
            background: theme === 'light' ? '#e0f7ff' : '#34495e',
            borderLeft: '5px solid #2a8cba',
            padding: '25px',
            borderRadius: '0 10px 10px 0',
            margin: '30px 0'
        },
        highlightTitle: {
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '15px'
        },
        directionsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '30px'
        },
        directionItem: {
            background: theme === 'light' ? '#f8f9fa' : '#34495e',
            padding: '25px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease',
            color: theme === 'light' ? '#333' : '#ecf0f1'
        },
        directionIcon: {
            width: '60px',
            height: '60px',
            background: theme === 'light' ? '#e0f7ff' : '#2c3e50',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2a8cba',
            fontSize: '1.5rem'
        },
        equipmentSection: {
            background: theme === 'light' 
                ? 'linear-gradient(135deg, rgba(26,95,122,0.05), rgba(87,197,247,0.05))'
                : 'linear-gradient(135deg, rgba(44,62,80,0.05), rgba(52,73,94,0.05))',
            padding: '40px',
            borderRadius: '10px',
            margin: '40px 0'
        },
        equipmentGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '30px'
        },
        equipmentItem: {
            textAlign: 'center',
            padding: '20px',
            background: theme === 'light' ? 'white' : '#2c3e50',
            borderRadius: '10px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            color: theme === 'light' ? '#333' : '#ecf0f1'
        },
        equipmentIcon: {
            fontSize: '2.5rem',
            color: '#2a8cba',
            marginBottom: '15px'
        },
        chessSection: {
            background: 'linear-gradient(135deg, #2c3e50, #4a6491)',
            borderRadius: '10px',
            padding: '40px',
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap'
        },
        chessIcon: {
            fontSize: '4rem',
            color: 'white'
        },
        chessTitle: {
            fontSize: '1.8rem',
            marginBottom: '15px',
            color: '#57c5f7'
        },
        chessText: {
            color: 'white',
            opacity: 0.9
        }
    };
    
    const directions = [
        { icon: 'fab fa-python', title: 'Программирование на языке Python', desc: 'Изучение одного из самых популярных языков программирования' },
        { icon: 'fas fa-mobile-alt', title: 'Мобильная разработка', desc: 'Создание приложений для Android и iOS' },
        { icon: 'fas fa-robot', title: 'Робототехника', desc: 'Проектирование, сборка и программирование роботов' },
        { icon: 'fas fa-server', title: 'Системное администрирование', desc: 'Настройка и обслуживание компьютерных сетей' },
        { icon: 'fas fa-shield-alt', title: 'Кибергигиена и большие данные', desc: 'Основы кибербезопасности и анализ данных' },
        { icon: 'fas fa-vr-cardboard', title: 'Разработка виртуальных приложений', desc: 'Создание VR/AR приложений' }
    ];
    
    const equipment = [
        { icon: 'fas fa-vr-cardboard', title: 'VR-шлемы' },
        { icon: 'fas fa-video', title: 'Камеры 360°' },
        { icon: 'fas fa-robot', title: 'Робототехнические наборы' },
        { icon: 'fas fa-desktop', title: 'Интерактивные комплексы' }
    ];
    
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Что такое "IT-куб"?</h1>
            <div style={styles.content}>
                <p style={styles.text}>Это центр образования детей по программам, направленным на ускоренное освоение актуальных и востребованных знаний, навыков и компетенций в сфере цифрового образования детей от 7 до 18 лет, где опытные наставники и компании-лидеры IT-рынка на бесплатной основе обучают молодых людей языкам программирования, VR/AR разработкам, программированию роботов, созданию нейросетевых моделей и пр.</p>
                <p style={styles.text}>Итогом обучения станет умение самостоятельно разрабатывать информационные системы. Выпускники Центра получат сертификат об окончании курса.</p>
                
                <div style={styles.highlight}>
                    <h3 style={styles.highlightTitle}>«IT-куб» в Коврове работает по шести направлениям:</h3>
                </div>
                
                <div style={styles.directionsGrid}>
                    {directions.map((d, i) => (
                        <div key={i} style={styles.directionItem}>
                            <div style={styles.directionIcon}><i className={d.icon}></i></div>
                            <div><h4 style={{color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '8px'}}>{d.title}</h4><p style={{color: theme === 'light' ? '#666' : '#bbb', fontSize: '0.9rem'}}>{d.desc}</p></div>
                        </div>
                    ))}
                </div>
                
                <div style={styles.equipmentSection}>
                    <h3 style={{color: theme === 'light' ? '#1a5f7a' : '#57c5f7', textAlign: 'center', marginBottom: '30px'}}>Современное оборудование</h3>
                    <p style={{textAlign: 'center', marginBottom: '30px', color: theme === 'light' ? '#555' : '#ecf0f1'}}>Каждое направление оснащено новейшим современным оборудованием:</p>
                    <div style={styles.equipmentGrid}>
                        {equipment.map((e, i) => (
                            <div key={i} style={styles.equipmentItem}>
                                <div style={styles.equipmentIcon}><i className={e.icon}></i></div>
                                <h4>{e.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={styles.chessSection}>
                    <div style={styles.chessIcon}><i className="fas fa-chess-queen"></i></div>
                    <div style={{flex: 1}}>
                        <h3 style={styles.chessTitle}>Шахматный клуб</h3>
                        <p style={styles.chessText}>Дополнительно к основным программам проходят занятия по шахматам – игре, в которой творчество сочетается с логикой и строгими правилами! Занятия шахматами развивают стратегическое мышление, улучшают память и концентрацию внимания, помогают детям лучше усваивать сложные IT-дисциплины.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;