import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    const theme = useSelector(state => state.theme.theme);
    
    const styles = {
        heroSection: {
            padding: '80px 0 40px',
            position: 'relative',
            overflow: 'hidden'
        },
        heroBg: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: theme === 'light' 
                ? 'linear-gradient(135deg, rgba(42,140,186,0.05), rgba(87,197,247,0.05))'
                : 'linear-gradient(135deg, rgba(44,62,80,0.05), rgba(52,73,94,0.05))',
            zIndex: -1
        },
        heroContent: {
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 60px'
        },
        heroTitle: {
            fontSize: '3rem',
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '20px',
            fontWeight: 800
        },
        heroSubtitle: {
            fontSize: '1.2rem',
            color: '#2a2a2a',
            marginBottom: '30px'
        },
        heroBtn: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(to right, #2a8cba, #57c5f7)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem'
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '40px'
        },
        featureCard: {
            background: theme === 'light' ? 'white' : '#2c3e50',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)',
            textAlign: 'center',
            borderTop: '5px solid #57c5f7',
            transition: 'all 0.3s ease',
            color: '#1a1a1a'
        },
        featureIcon: {
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #57c5f7, #2a8cba)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'white',
            fontSize: '1.8rem'
        },
        contentCard: {
            background: theme === 'light' ? 'white' : '#2c3e50',
            borderRadius: '10px',
            padding: '40px',
            boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)',
            marginTop: '60px',
            transition: 'all 0.3s ease'
        },
        sectionTitle: {
            textAlign: 'center',
            fontSize: '2.5rem',
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '50px',
            position: 'relative',
            paddingBottom: '15px'
        },
        whyUsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
        },
        whyUsItem: {
            textAlign: 'center',
            padding: '25px',
            background: theme === 'light' ? '#e0f7ff' : '#34495e',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            color: '#1a1a1a'
        },
        whyUsNumber: {
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#2a8cba',
            opacity: 0.3,
            marginBottom: '15px'
        }
    };
    
    const features = [
        { icon: 'fas fa-graduation-cap', title: 'Бесплатное обучение', desc: 'Все курсы абсолютно бесплатны благодаря государственной поддержке' },
        { icon: 'fas fa-vr-cardboard', title: 'Современное оборудование', desc: 'VR-шлемы, 360° камеры, робототехнические наборы, интерактивные комплексы' },
        { icon: 'fas fa-certificate', title: 'Сертификат об окончании', desc: 'Все выпускники получают официальный документ, подтверждающий освоение курса' },
        { icon: 'fas fa-chess-queen', title: 'Шахматный клуб', desc: 'Дополнительные занятия по шахматам для развития логического мышления' }
    ];
    
    const whyUsItems = [
        { number: '01', title: 'Актуальные направления', desc: 'Мы обучаем самым востребованным IT-специальностям: Python, мобильная разработка, робототехника, кибербезопасность' },
        { number: '02', title: 'Практический подход', desc: '80% времени уделяется практическим занятиям и проектной работе' },
        { number: '03', title: 'Опытные наставники', desc: 'Преподаватели — практикующие специалисты из IT-индустрии' },
        { number: '04', title: 'Проектное обучение', desc: 'Каждый ученик создает собственный проект для портфолио' }
    ];
    
    return (
        <div>
            <div id="demoCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1200x400/1a5f7a/white?text=IT-куб+Ковров" className="d-block w-100" alt="IT-куб Ковров - центр цифрового образования" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Добро пожаловать в IT-куб Ковров</h3>
                            <p>Центр цифрового образования детей от 7 до 18 лет</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x400/2a8cba/white?text=Бесплатное+обучение" className="d-block w-100" alt="Бесплатное обучение" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Бесплатное обучение</h3>
                            <p>Все курсы бесплатны благодаря государственной поддержке</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x400/57c5f7/white?text=Современное+оборудование" className="d-block w-100" alt="Современное оборудование" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Современное оборудование</h3>
                            <p>VR-шлемы, 3D-принтеры, интерактивные комплексы</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div style={styles.heroSection}>
                <div style={styles.heroBg}></div>
                <div className="container">
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>Цифровое образование для будущего</h1>
                        <h2 style={styles.heroSubtitle}>IT-куб Ковров — современная площадка, где дети от 7 до 18 лет осваивают востребованные IT-навыки под руководством опытных наставников</h2>
                        <Link to="/enroll" style={styles.heroBtn}>
                            <i className="fas fa-rocket"></i>
                            Записаться на курсы
                        </Link>
                    </div>
                    
                    <div style={styles.featuresGrid}>
                        {features.map((f, i) => (
                            <Fade direction="up" delay={i * 100} key={i}>
                                <div style={styles.featureCard}>
                                    <div style={styles.featureIcon}><i className={f.icon}></i></div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div style={styles.contentCard}>
                    <h2 style={styles.sectionTitle}>Почему выбирают IT-куб?</h2>
                    <div style={styles.whyUsGrid}>
                        {whyUsItems.map((item, i) => (
                            <Fade direction="up" delay={i * 100} key={i}>
                                <div style={styles.whyUsItem}>
                                    <div style={styles.whyUsNumber}>{item.number}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
                
                <div style={{textAlign: 'center', margin: '80px 0'}}>
                    <h2 style={{color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '20px'}}>Готовы начать?</h2>
                    <p style={{fontSize: '1.2rem', color: '#2a2a2a', marginBottom: '30px'}}>Запишите ребенка на бесплатные курсы и откройте для него мир цифровых технологий</p>
                    <Link to="/enroll" style={styles.heroBtn}><i className="fas fa-user-plus"></i> Записаться сейчас</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;