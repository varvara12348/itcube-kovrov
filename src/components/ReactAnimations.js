import React from 'react';
import './ReactAnimations.css';

const ReactAnimations = () => {
    const courses = [
        { name: 'Python', icon: '🐍', color: '#1a5f7a', anim: 'pulse' },
        { name: 'Mobile', icon: '📱', color: '#2a8cba', anim: 'bounce' },
        { name: 'Robotics', icon: '🤖', color: '#57c5f7', anim: 'swing' },
        { name: 'Web', icon: '🌐', color: '#0ea5e9', anim: 'tada' },
        { name: 'Security', icon: '🔒', color: '#1a5f7a', anim: 'shake' },
        { name: 'VR/AR', icon: '🥽', color: '#2a8cba', anim: 'flash' }
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px', margin: '20px 0', background: '#f8f9fa', borderRadius: '15px' }}>
            <h3 style={{ color: '#1a5f7a', marginBottom: '20px' }}>🎯 Наши направления</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                {courses.map((course) => (
                    <div
                        key={course.name}
                        className={`anim-${course.anim}`}
                        style={{
                            padding: '20px',
                            background: course.color,
                            color: 'white',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'transform 0.3s'
                        }}
                    >
                        <div style={{ fontSize: '2rem' }}>{course.icon}</div>
                        <strong>{course.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReactAnimations;