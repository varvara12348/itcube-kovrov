import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        group: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            // Вход
            const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            const user = savedUsers.find(u => u.email === formData.email && u.password === formData.password);
            
            if (user) {
                dispatch(setUser({ name: user.name, group: user.group, role: user.role }));
                localStorage.setItem('currentUser', JSON.stringify({ name: user.name, group: user.group, role: user.role }));
                navigate('/');
            } else if (formData.email === 'admin@itcube.ru' && formData.password === '123456') {
                dispatch(setUser({ name: 'Администратор', group: 'Админ', role: 'admin' }));
                localStorage.setItem('currentUser', JSON.stringify({ name: 'Администратор', group: 'Админ', role: 'admin' }));
                navigate('/');
            } else {
                setError('Неверный email или пароль');
            }
        } else {
            // Регистрация
            if (!formData.name || !formData.email || !formData.password) {
                setError('Заполните все поля');
                return;
            }
            
            const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            if (savedUsers.find(u => u.email === formData.email)) {
                setError('Пользователь с таким email уже существует');
                return;
            }
            
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                group: formData.group || 'Новая группа',
                role: 'student'
            };
            
            savedUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(savedUsers));
            
            dispatch(setUser({ name: newUser.name, group: newUser.group, role: newUser.role }));
            localStorage.setItem('currentUser', JSON.stringify({ name: newUser.name, group: newUser.group, role: newUser.role }));
            navigate('/');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        dispatch(setUser({ name: 'Гость', group: '', role: 'guest' }));
        navigate('/');
    };

    const styles = {
        container: {
            maxWidth: '450px',
            margin: '80px auto',
            padding: '35px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        },
        title: {
            textAlign: 'center',
            color: '#1a5f7a',
            marginBottom: '25px',
            fontSize: '28px'
        },
        input: {
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '1rem'
        },
        btn: {
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #1a5f7a, #2a8cba)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
        },
        switchBtn: {
            textAlign: 'center',
            marginTop: '15px',
            color: '#2a8cba',
            cursor: 'pointer'
        },
        error: {
            color: '#f44336',
            textAlign: 'center',
            marginBottom: '15px'
        },
        logoutBtn: {
            width: '100%',
            padding: '12px',
            background: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginBottom: '10px'
        }
    };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.role !== 'guest') {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>Личный кабинет</h2>
                <p><strong>Имя:</strong> {currentUser.name}</p>
                <p><strong>Группа:</strong> {currentUser.group}</p>
                <p><strong>Роль:</strong> {currentUser.role === 'admin' ? 'Администратор' : 'Ученик'}</p>
                <button onClick={handleLogout} style={styles.logoutBtn}>Выйти</button>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</h2>
            {error && <p style={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="ФИО"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                {!isLogin && (
                    <input
                        type="text"
                        name="group"
                        placeholder="Группа (необязательно)"
                        value={formData.group}
                        onChange={handleChange}
                        style={styles.input}
                    />
                )}
                <button type="submit" style={styles.btn}>
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>
            <p style={styles.switchBtn} onClick={() => { setIsLogin(!isLogin); setError(''); }}>
                {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </p>
            <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '15px', color: '#666' }}>
                Тестовые данные:<br />
                admin@itcube.ru / 123456 (администратор)<br />
                student@itcube.ru / 123456 (ученик)
            </p>
        </div>
    );
};

export default Login;