import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PhotoUpload = () => {
    const theme = useSelector(state => state.theme.theme);
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    // Загрузка сохраненного фото при монтировании
    useEffect(() => {
        const savedPhoto = localStorage.getItem('userPhoto');
        if (savedPhoto) {
            setPreview(savedPhoto);
        }
    }, []);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setUploadMessage('Файл слишком большой (максимум 5 МБ)');
                return;
            }
            if (!file.type.startsWith('image/')) {
                setUploadMessage('Пожалуйста, выберите изображение');
                return;
            }
            
            setPhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const photoData = reader.result;
                setPreview(photoData);
                localStorage.setItem('userPhoto', photoData);
                setUploadMessage('Фото успешно загружено!');
                setTimeout(() => setUploadMessage(''), 3000);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeletePhoto = () => {
        setPreview(null);
        setPhoto(null);
        localStorage.removeItem('userPhoto');
        setUploadMessage('Фото удалено');
        setTimeout(() => setUploadMessage(''), 3000);
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '50px auto',
            padding: '30px',
            background: theme === 'light' ? 'white' : '#2c3e50',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
        },
        title: {
            color: theme === 'light' ? '#1a5f7a' : '#57c5f7',
            marginBottom: '20px'
        },
        avatarContainer: {
            position: 'relative',
            width: '150px',
            height: '150px',
            margin: '0 auto 20px',
            cursor: 'pointer'
        },
        avatar: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #2a8cba',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        },
        avatarPlaceholder: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: '#2a8cba',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'white',
            border: '3px solid white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        },
        input: {
            display: 'none'
        },
        uploadBtn: {
            background: 'linear-gradient(135deg, #1a5f7a, #2a8cba)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            border: 'none',
            fontSize: '1rem',
            margin: '10px',
            display: 'inline-block'
        },
        deleteBtn: {
            background: '#f44336',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            border: 'none',
            fontSize: '1rem',
            margin: '10px'
        },
        message: {
            color: '#4caf50',
            marginTop: '15px'
        },
        errorMessage: {
            color: '#f44336',
            marginTop: '15px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Мой профиль</h2>
            
            <div 
                style={styles.avatarContainer}
                onClick={() => document.getElementById('photoInput').click()}
            >
                {preview ? (
                    <img src={preview} alt="Аватар" style={styles.avatar} />
                ) : (
                    <div style={styles.avatarPlaceholder}>
                        📷
                    </div>
                )}
            </div>
            
            <p style={{ color: theme === 'light' ? '#666' : '#ccc', marginBottom: '15px' }}>
                Нажмите на фото, чтобы загрузить
            </p>
            
            <input
                type="file"
                id="photoInput"
                accept="image/*"
                onChange={handlePhotoChange}
                style={styles.input}
            />
            
            <div>
                <label htmlFor="photoInput" style={styles.uploadBtn}>
                    Выбрать фото
                </label>
                {preview && (
                    <button onClick={handleDeletePhoto} style={styles.deleteBtn}>
                        Удалить фото
                    </button>
                )}
            </div>
            
            {uploadMessage && (
                <p style={uploadMessage.includes('успешно') ? styles.message : styles.errorMessage}>
                    {uploadMessage}
                </p>
            )}
            
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#666' }}>
                Поддерживаются форматы: JPG, PNG, GIF. Максимум 5 МБ.
            </p>
        </div>
    );
};

export default PhotoUpload;