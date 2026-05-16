import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { Zoom } from 'react-awesome-reveal';
import 'react-transition-group';

const Courses = () => {
    const theme = useSelector(state => state.theme.theme);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    
    const products = [
        { id: 1, name: 'Программирование на Python', description: 'Изучение основ Python', category: 'Программирование', price: 0, stock: 10 },
        { id: 2, name: 'Мобильная разработка', description: 'Создание приложений для Android', category: 'Разработка', price: 0, stock: 8 },
        { id: 3, name: 'Робототехника', description: 'Сборка и программирование роботов', category: 'Робототехника', price: 0, stock: 5 },
        { id: 4, name: 'Веб-разработка', description: 'Создание сайтов', category: 'Программирование', price: 0, stock: 12 },
        { id: 5, name: 'Кибербезопасность', description: 'Защита информации', category: 'Безопасность', price: 0, stock: 6 },
        { id: 6, name: 'VR/AR разработка', description: 'Виртуальная реальность', category: 'Разработка', price: 0, stock: 4 }
    ];
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
    
    const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };
    
    const handleEnroll = () => {
        alert('Вы записаны на курс!');
        setShowModal(false);
    };
    
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    
    useEffect(() => {
        if (showModal && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [showModal]);
    
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setShowModal(false);
        }
    };
    
    const styles = {
        container: { maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' },
        title: { textAlign: 'center', fontSize: '2.5rem', color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '20px' },
        intro: { textAlign: 'center', fontSize: '1.2rem', color: '#2a2a2a', maxWidth: '800px', margin: '0 auto 50px' },
        grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' },
        card: { background: theme === 'light' ? 'white' : '#2c3e50', borderRadius: '10px', overflow: 'hidden', boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)' },
        header: { background: 'linear-gradient(135deg, #2a8cba, #57c5f7)', padding: '25px', textAlign: 'center', color: 'white' },
        icon: { fontSize: '2.8rem', marginBottom: '15px' },
        cardTitle: { fontSize: '1.6rem', fontWeight: 700, color: 'white' },
        body: { padding: '30px' },
        desc: { color: '#2a2a2a', marginBottom: '25px', lineHeight: '1.7' },
        details: { listStyle: 'none', marginBottom: '25px' },
        detailItem: { padding: '10px 0', borderBottom: `1px solid ${theme === 'light' ? '#ddd' : '#444'}`, display: 'flex', justifyContent: 'space-between', color: '#1a1a1a' },
        label: { fontWeight: 600, color: '#0d3b4f' },
        btn: { display: 'block', width: '100%', padding: '12px', background: 'linear-gradient(to right, #2a8cba, #57c5f7)', color: 'white', textAlign: 'center', borderRadius: '10px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' },
        pagination: { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' },
        pageButton: (isActive) => ({ padding: '8px 16px', borderRadius: '5px', border: 'none', background: isActive ? '#1a5f7a' : '#e0e0e0', color: isActive ? 'white' : '#1a1a1a', cursor: 'pointer' }),
        chessSection: { background: 'linear-gradient(135deg, #2c3e50, #4a6491)', borderRadius: '10px', padding: '40px', marginTop: '60px', display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' },
        chessIcon: { fontSize: '4rem', color: 'white' },
        chessTitle: { fontSize: '1.8rem', marginBottom: '15px', color: '#e0f7ff' },
        chessText: { color: '#e0e0e0', opacity: 0.9 }
    };
    
    const courseIcons = { 1: 'fab fa-python', 2: 'fas fa-mobile-alt', 3: 'fas fa-robot', 4: 'fas fa-server', 5: 'fas fa-shield-alt', 6: 'fas fa-vr-cardboard' };
    
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Направления обучения</h1>
            <p style={styles.intro}>В IT-кубе Ковров мы предлагаем шесть современных образовательных направлений.</p>
            
            <div style={styles.grid}>
                {currentProducts.map((product) => (
                    <Zoom key={product.id}>
                        <div style={styles.card}>
                            <div style={styles.header}>
                                <div style={styles.icon}><i className={courseIcons[product.id] || 'fas fa-code'}></i></div>
                                <h3 style={styles.cardTitle}>{product.name}</h3>
                            </div>
                            <div style={styles.body}>
                                <p style={styles.desc}>{product.description}</p>
                                <ul style={styles.details}>
                                    <li style={styles.detailItem}><span style={styles.label}>Категория:</span><span>{product.category}</span></li>
                                    <li style={styles.detailItem}><span style={styles.label}>Цена:</span><span>{product.price} ₽</span></li>
                                    <li style={styles.detailItem}><span style={styles.label}>В наличии:</span><span>{product.stock} шт</span></li>
                                </ul>
                                <button 
                                    onClick={() => openModal(product)} 
                                    style={styles.btn} 
                                    className="btn-animate"
                                    aria-label={`Записаться на курс ${product.name}`}
                                >
                                    Записаться на курс
                                </button>
                            </div>
                        </div>
                    </Zoom>
                ))}
            </div>
            
            {totalPages > 1 && (
                <div style={styles.pagination}>
                    <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} style={styles.pageButton(false)} aria-label="Первая страница">«</button>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={styles.pageButton(false)} aria-label="Предыдущая страница">← Назад</button>
                    {[...Array(totalPages).keys()].map(i => i + 1).map(number => (
                        <button 
                            key={number} 
                            onClick={() => setCurrentPage(number)} 
                            style={styles.pageButton(currentPage === number)}
                            aria-label={`Страница ${number}`}
                            aria-current={currentPage === number ? 'page' : undefined}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} style={styles.pageButton(false)} aria-label="Следующая страница">Вперед →</button>
                    <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} style={styles.pageButton(false)} aria-label="Последняя страница">»</button>
                </div>
            )}
            
            <div style={styles.chessSection}>
                <div style={styles.chessIcon}><i className="fas fa-chess-queen"></i></div>
                <div><h3 style={styles.chessTitle}>Шахматный клуб</h3><p style={styles.chessText}>Дополнительно к основным IT-направлениям работает шахматный клуб.</p></div>
            </div>
            
            {showModal && (
                <div 
                    className="modal-overlay" 
                    onClick={() => setShowModal(false)}
                    onKeyDown={handleKeyDown}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div 
                        className="modal-container" 
                        onClick={(e) => e.stopPropagation()}
                        ref={modalRef}
                    >
                        <div className="modal-header">
                            <h5 id="modal-title">Подтверждение записи</h5>
                            <button 
                                className="modal-close" 
                                onClick={() => setShowModal(false)}
                                ref={closeButtonRef}
                                aria-label="Закрыть"
                            >
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            {selectedProduct && <p>Вы выбрали курс: <strong>{selectedProduct.name}</strong></p>}
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="modal-btn cancel" 
                                onClick={() => setShowModal(false)}
                                aria-label="Закрыть окно"
                            >
                                Закрыть
                            </button>
                            <button 
                                className="modal-btn confirm" 
                                onClick={handleEnroll}
                                aria-label="Подтвердить запись на курс"
                            >
                                Подтвердить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;