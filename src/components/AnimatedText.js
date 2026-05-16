import React from 'react';
import { bounce, flash, pulse, shake, swing, tada } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bounce: { animationName: bounce, animationDuration: '1s' },
    flash: { animationName: flash, animationDuration: '1s' },
    pulse: { animationName: pulse, animationDuration: '1s' },
    shake: { animationName: shake, animationDuration: '1s' },
    swing: { animationName: swing, animationDuration: '1s' },
    tada: { animationName: tada, animationDuration: '1s' }
});

const AnimatedText = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', background: '#f0f0f0', borderRadius: '10px', margin: '20px 0' }}>
            <h3 style={{ color: '#1a5f7a' }}>2. Анимация с React-animations</h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className={css(styles.bounce)} style={{ padding: '10px', background: '#1a5f7a', color: 'white', borderRadius: '5px' }}>bounce</div>
                <div className={css(styles.flash)} style={{ padding: '10px', background: '#2a8cba', color: 'white', borderRadius: '5px' }}>flash</div>
                <div className={css(styles.pulse)} style={{ padding: '10px', background: '#57c5f7', color: 'white', borderRadius: '5px' }}>pulse</div>
                <div className={css(styles.shake)} style={{ padding: '10px', background: '#0ea5e9', color: 'white', borderRadius: '5px' }}>shake</div>
                <div className={css(styles.swing)} style={{ padding: '10px', background: '#1a5f7a', color: 'white', borderRadius: '5px' }}>swing</div>
                <div className={css(styles.tada)} style={{ padding: '10px', background: '#2a8cba', color: 'white', borderRadius: '5px' }}>tada</div>
            </div>
        </div>
    );
};

export default AnimatedText;