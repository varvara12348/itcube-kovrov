import React from 'react';
import { useTheme } from '../context';

const Button = ({ children, onClick, variant = 'primary' }) => {
    const { theme } = useTheme();
    
    const getButtonStyles = () => {
        if (theme === 'light') {
            return {
                primary: {
                    background: 'linear-gradient(to right, #2a8cba, #57c5f7)',
                    color: 'white',
                    border: 'none'
                },
                secondary: {
                    background: 'transparent',
                    color: '#2a8cba',
                    border: '2px solid #2a8cba'
                }
            };
        } else {
            return {
                primary: {
                    background: 'linear-gradient(to right, #3498db, #2980b9)',
                    color: 'white',
                    border: 'none'
                },
                secondary: {
                    background: 'transparent',
                    color: '#3498db',
                    border: '2px solid #3498db'
                }
            };
        }
    };
    
    const styles = {
        button: {
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            ...getButtonStyles()[variant]
        }
    };
    
    return (
        <button style={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;