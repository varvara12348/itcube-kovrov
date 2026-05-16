import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector(state => state.theme.theme);
    
    const styles = {
        footer: {
            background: theme === 'light' ? '#1a5f7a' : '#2c3e50',
            color: 'white',
            padding: '60px 0 30px',
            marginTop: '80px',
            transition: 'all 0.3s ease'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
        },
        footerContent: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
        },
        columnTitle: {
            fontSize: '1.3rem',
            marginBottom: '25px',
            color: '#57c5f7',
            position: 'relative',
            paddingBottom: '10px'
        },
        footerText: {
            color: '#ddd',
            lineHeight: 1.7,
            marginBottom: '20px'
        },
        footerLinks: {
            listStyle: 'none',
            padding: 0
        },
        footerLink: {
            marginBottom: '12px'
        },
        link: {
            color: '#ddd',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        socialLinks: {
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
        },
        socialLink: {
            width: '45px',
            height: '45px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
        },
        copyright: {
            textAlign: 'center',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#bbb',
            fontSize: '0.9rem'
        }
    };
    
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.footerContent}>
                    <div>
                        <h3 style={styles.columnTitle}>IT-куб Ковров</h3>
                        <p style={styles.footerText}>Центр цифрового образования детей, где школьники осваивают востребованные IT-навыки на бесплатной основе.</p>
                        <div style={styles.socialLinks}>
                            <a href="https://vk.com/club206722684" target="_blank" rel="noopener noreferrer" aria-label="Наша группа ВКонтакте">
                                <i className="fab fa-vk"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 style={styles.columnTitle}>Направления</h3>
                        <ul style={styles.footerLinks}>
                            <li style={styles.footerLink}><Link to="/courses#python" style={styles.link}><i className="fab fa-python"></i> Программирование на Python</Link></li>
                            <li style={styles.footerLink}><Link to="/courses#mobile" style={styles.link}><i className="fas fa-mobile-alt"></i> Мобильная разработка</Link></li>
                            <li style={styles.footerLink}><Link to="/courses#robotics" style={styles.link}><i className="fas fa-robot"></i> Робототехника</Link></li>
                            <li style={styles.footerLink}><Link to="/courses#sysadmin" style={styles.link}><i className="fas fa-server"></i> Системное администрирование</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style={styles.columnTitle}>Ссылки</h3>
                        <ul style={styles.footerLinks}>
                            <li style={styles.footerLink}><Link to="/" style={styles.link}><i className="fas fa-home"></i> Главная</Link></li>
                            <li style={styles.footerLink}><Link to="/about" style={styles.link}><i className="fas fa-info-circle"></i> О нас</Link></li>
                            <li style={styles.footerLink}><Link to="/courses" style={styles.link}><i className="fas fa-laptop-code"></i> Направления</Link></li>
                            <li style={styles.footerLink}><Link to="/enroll" style={styles.link}><i className="fas fa-pen-alt"></i> Запись на курсы</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div style={styles.copyright}>
                    <p>&copy; 2023 IT-куб Ковров. Все права защищены.</p>
                    <p>Сеть центров цифрового образования детей «ИТ-КУБ»</p>
                    <p style={{marginTop: '10px'}}>Студент: Горбунова В.П. | Группа: ИРспк-223 | 12.03.2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;