import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions/themeActions';

const Header = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const theme = useSelector(state => state.theme.theme);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const isActive = (path) => location.pathname === path;
    
    const styles = {
        header: {
            background: theme === 'light' ? 'linear-gradient(135deg, #1a5f7a, #2a8cba)' : 'linear-gradient(135deg, #2c3e50, #34495e)',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(26, 95, 122, 0.2)',
            transition: 'all 0.3s ease'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            textDecoration: 'none'
        },
        logoImg: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2a8cba, #57c5f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            fontFamily: "'Courier New', monospace",
            border: '3px solid white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
        },
        logoText: {
            color: 'white'
        },
        logoTitle: {
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: 0
        },
        logoSubtitle: {
            fontSize: '0.9rem',
            opacity: 0.9,
            margin: 0
        },
        userInfo: {
            fontSize: '0.8rem',
            opacity: 0.8,
            marginTop: '5px'
        },
        navList: {
            display: 'flex',
            listStyle: 'none',
            gap: '5px',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap'
        },
        navLink: {
            textDecoration: 'none',
            color: 'white',
            fontWeight: 600,
            padding: '12px 20px',
            borderRadius: '30px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        activeNavLink: {
            background: 'rgba(255, 255, 255, 0.15)'
        },
        themeButton: {
            padding: '8px 16px',
            borderRadius: '20px',
            border: '2px solid white',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
        },
        mobileMenuBtn: {
            display: 'none',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            fontSize: '1.5rem',
            color: 'white',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '50%'
        },
        mobileNav: {
            display: mobileMenuOpen ? 'block' : 'none',
            width: '100%',
            marginTop: '15px'
        },
        mobileNavList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '15px',
            borderRadius: '10px',
            listStyle: 'none'
        }
    };
    
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link to="/" style={styles.logo}>
                    <div style={styles.logoImg}>IT</div>
                    <div style={styles.logoText}>
                        <h1 style={styles.logoTitle}>IT-куб Ковров</h1>
                        <p style={styles.logoSubtitle}>Центр цифрового образования</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={styles.userInfo}>{user.name} | {user.group}</div>
                        {localStorage.getItem('userPhoto') && (
                    <img 
                        src={localStorage.getItem('userPhoto')} 
                        alt="avatar" 
                     style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} 
                    />  
                    )}
                 </div>
                </div>
                </Link>
                
                <button 
                    style={styles.mobileMenuBtn} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>
                
                <nav>
                    <ul style={styles.navList}>
                        <li><Link to="/" style={{...styles.navLink, ...(isActive('/') ? styles.activeNavLink : {})}}><i className="fas fa-home"></i> Главная</Link></li>
                        <li><Link to="/about" style={{...styles.navLink, ...(isActive('/about') ? styles.activeNavLink : {})}}><i className="fas fa-info-circle"></i> О нас</Link></li>
                        <li><Link to="/courses" style={{...styles.navLink, ...(isActive('/courses') ? styles.activeNavLink : {})}}><i className="fas fa-laptop-code"></i> Направления</Link></li>
                        <li><Link to="/enroll" style={{...styles.navLink, ...(isActive('/enroll') ? styles.activeNavLink : {})}}><i className="fas fa-pen-alt"></i> Запись</Link></li>
                        <li><Link to="/login">Вход</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </nav>
                
                <button 
                    style={styles.themeButton}
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === 'light' ? '🌙 Темная тема' : '☀️ Светлая тема'}
                </button>
                
                <div style={styles.mobileNav}>
                    <ul style={styles.mobileNavList}>
                        <li><Link to="/" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}><i className="fas fa-home"></i> Главная</Link></li>
                        <li><Link to="/about" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}><i className="fas fa-info-circle"></i> О нас</Link></li>
                        <li><Link to="/courses" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}><i className="fas fa-laptop-code"></i> Направления</Link></li>
                        <li><Link to="/enroll" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}><i className="fas fa-pen-alt"></i> Запись</Link></li>
                        <li><Link to="/login">Вход</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;