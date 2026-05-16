import React, { useState, useEffect } from 'react';

const NewsLoader = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(new Date());
    
    // Эффект для загрузки данных при монтировании
    useEffect(() => {
        console.log("📰 Загрузка новостей...");
        setLoading(true);
        
        // Имитация загрузки с сервера
        const timer = setTimeout(() => {
            try {
                setNews([
                    { id: 1, title: "Новый набор на курсы Python", date: "12.03.2026", important: true },
                    { id: 2, title: "Победа на хакатоне 'Цифровой прорыв'", date: "10.03.2026", important: true },
                    { id: 3, title: "День открытых дверей 25 марта", date: "08.03.2026", important: false },
                    { id: 4, title: "Мастер-класс по робототехнике", date: "05.03.2026", important: false },
                    { id: 5, title: "Открыта запись на летние интенсивы", date: "03.03.2026", important: true }
                ]);
                setLoading(false);
            } catch (err) {
                setError("Ошибка загрузки новостей");
                setLoading(false);
            }
        }, 1500);
        
        return () => {
            console.log("🧹 Очистка таймера");
            clearTimeout(timer);
        };
    }, []);
    
    // Эффект для обновления времени
    useEffect(() => {
        const timer = setInterval(() => {
            setLastUpdate(new Date());
        }, 60000);
        
        return () => clearInterval(timer);
    }, []);
    
    // Эффект при изменении новостей
    useEffect(() => {
        if (news.length > 0) {
            console.log(`📊 Загружено новостей: ${news.length}`);
        }
    }, [news]);
    
    const styles = {
        container: {
            background: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            margin: '20px auto'
        },
        title: {
            color: '#1a5f7a',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        loading: {
            textAlign: 'center',
            padding: '40px'
        },
        spinner: {
            width: '40px',
            height: '40px',
            margin: '0 auto 20px',
            border: '4px solid #f0f0f0',
            borderTop: '4px solid #2a8cba',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        },
        error: {
            padding: '20px',
            background: '#ffebee',
            color: '#c62828',
            borderRadius: '5px',
            marginBottom: '20px'
        },
        newsItem: (important) => ({
            padding: '15px',
            marginBottom: '10px',
            background: important ? '#fff3e0' : '#f8f9fa',
            borderLeft: important ? '5px solid #f44336' : '5px solid #2a8cba',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        }),
        newsTitle: {
            fontWeight: 'bold',
            color: '#1a5f7a'
        },
        newsDate: {
            fontSize: '0.85rem',
            color: '#666',
            marginTop: '5px'
        },
        importantBadge: {
            background: '#f44336',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '3px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            marginLeft: '10px'
        },
        footer: {
            marginTop: '20px',
            padding: '15px',
            background: '#e3f2fd',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '0.9rem'
        }
    };
    
    return (
        <div style={styles.container}>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            
            <div style={styles.title}>
                <span style={{ fontSize: '2rem' }}>📢</span>
                <h2 style={{ margin: 0 }}>Новости IT-куб</h2>
            </div>
            
            {loading && (
                <div style={styles.loading}>
                    <div style={styles.spinner}></div>
                    <p>Загрузка новостей...</p>
                </div>
            )}
            
            {error && (
                <div style={styles.error}>
                    <strong>Ошибка:</strong> {error}
                    <button 
                        onClick={() => window.location.reload()}
                        style={{
                            marginLeft: '15px',
                            padding: '5px 15px',
                            background: '#c62828',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Повторить
                    </button>
                </div>
            )}
            
            {!loading && !error && (
                <>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                        color: '#666',
                        fontSize: '0.9rem'
                    }}>
                        <span>Всего новостей: <strong>{news.length}</strong></span>
                        <span>Обновлено: {lastUpdate.toLocaleTimeString()}</span>
                    </div>
                    
                    {news.map(item => (
                        <div 
                            key={item.id}
                            style={styles.newsItem(item.important)}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <span style={styles.newsTitle}>{item.title}</span>
                                {item.important && (
                                    <span style={styles.importantBadge}>Важно</span>
                                )}
                            </div>
                            <div style={styles.newsDate}>{item.date}</div>
                        </div>
                    ))}
                </>
            )}
            
            <div style={styles.footer}>
                <p style={{ margin: 0 }}>
                    <strong>Студент:</strong> Горбунова В.П. | 
                    <strong> Группа:</strong> ИРспк-223 | 
                    <strong> Дата:</strong> 12.03.2026
                </p>
            </div>
        </div>
    );
};

export default NewsLoader;