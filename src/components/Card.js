import React from 'react';
import { useTheme } from '../context';

const Card = ({ title, children, icon }) => {
    const { theme } = useTheme();
    
    const styles = {
        card: {
            background: theme === 'light' ? 'white' : '#2c3e50',
            color: theme === 'light' ? '#333' : '#ecf0f1',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: theme === 'light' 
                ? '0 4px 15px rgba(0,0,0,0.1)' 
                : '0 4px 15px rgba(0,0,0,0.3)',
            border: theme === 'light' 
                ? '1px solid #e0e0e0' 
                : '1px solid #7f8c8d',
            transition: 'all 0.3s ease',
            height: '100%'
        },
        icon: {
            fontSize: '2.5rem',
            marginBottom: '15px',
            textAlign: 'center'
        },
        title: {
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '15px',
            textAlign: 'center'
        }
    };
    
    return (
        <div style={styles.card}>
            {icon && <div style={styles.icon}>{icon}</div>}
            <h3 style={styles.title}>{title}</h3>
            {children}
        </div>
    );
};

export default Card;