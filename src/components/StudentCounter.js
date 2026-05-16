import React, { useState } from 'react';

const StudentCounter = ({ initialCount }) => {
    const [total, setTotal] = useState(initialCount);
    const [newToday, setNewToday] = useState(0);
    
    const styles = {
        container: {
            background: 'linear-gradient(135deg, #1a5f7a, #2a8cba)',
            padding: '20px',
            borderRadius: '10px',
            color: 'white',
            maxWidth: '400px',
            margin: '20px auto'
        },
        stats: {
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '20px'
        },
        statBox: {
            textAlign: 'center',
            background: 'rgba(255,255,255,0.1)',
            padding: '15px',
            borderRadius: '8px'
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: 'bold'
        },
        button: {
            padding: '10px 15px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
        },
        addButton: {
            background: '#4CAF50',
            color: 'white'
        },
        resetButton: {
            background: '#f44336',
            color: 'white'
        }
    };
    
    return (
        <div style={styles.container}>
            <h3 style={{ textAlign: 'center' }}>👥 Статистика учеников</h3>
            
            <div style={styles.stats}>
                <div style={styles.statBox}>
                    <div style={styles.statNumber}>{total}</div>
                    <div>Всего</div>
                </div>
                <div style={styles.statBox}>
                    <div style={{...styles.statNumber, color: '#ffeb3b'}}>
                        +{newToday}
                    </div>
                    <div>Новых сегодня</div>
                </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
                <button 
                    style={{...styles.button, ...styles.addButton}}
                    onClick={() => {
                        setTotal(prev => prev + 1);
                        setNewToday(prev => prev + 1);
                    }}
                >
                    + Добавить ученика
                </button>
                
                <button 
                    style={{...styles.button, ...styles.resetButton}}
                    onClick={() => {
                        setTotal(initialCount);
                        setNewToday(0);
                    }}
                >
                    Сбросить
                </button>
            </div>
            
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                Студент: Горбунова В.П. | Группа: ИРспк-223
            </p>
        </div>
    );
};

export default StudentCounter;