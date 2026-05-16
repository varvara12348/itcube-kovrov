import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './AnimatedBox.css';

const AnimatedBox = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: '20px', margin: '20px 0', background: '#f8f9fa', borderRadius: '15px', textAlign: 'center' }}>
            <h3 style={{ color: '#1a5f7a', marginBottom: '20px' }}>✨ Наши преимущества ✨</h3>
            <button
                onClick={() => setShow(!show)}
                style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #1a5f7a, #2a8cba)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                {show ? 'Скрыть преимущества' : 'Показать преимущества'}
            </button>
            <CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit>
                <div style={{ marginTop: '30px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        <div style={{ padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <span style={{ fontSize: '2rem' }}>🎓</span>
                            <h4>Бесплатное обучение</h4>
                        </div>
                        <div style={{ padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <span style={{ fontSize: '2rem' }}>🖥️</span>
                            <h4>Современное оборудование</h4>
                        </div>
                        <div style={{ padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <span style={{ fontSize: '2rem' }}>📜</span>
                            <h4>Сертификат об окончании</h4>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default AnimatedBox;