import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductRequest } from '../redux/actions/productActions';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_a5lskzp';
const EMAILJS_TEMPLATE_ID = 'template_swp4a2m';
const EMAILJS_PUBLIC_KEY = 'JAQfsKDnsXABs-rxH';

const Enroll = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();
    const [selectedCourse, setSelectedCourse] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    
    const courses = [
        { id: 'python', name: 'Программирование на Python', age: 'от 10 лет', duration: '72 часа' },
        { id: 'mobile', name: 'Мобильная разработка', age: 'от 12 лет', duration: '96 часов' },
        { id: 'robotics', name: 'Робототехника', age: 'от 7 лет', duration: '64 часа' },
        { id: 'sysadmin', name: 'Системное администрирование', age: 'от 14 лет', duration: '80 часов' },
        { id: 'cybersecurity', name: 'Кибергигиена', age: 'от 13 лет', duration: '72 часа' },
        { id: 'vr', name: 'VR/AR разработка', age: 'от 12 лет', duration: '88 часов' }
    ];
    
    const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.childName) newErrors.childName = 'Введите ФИО ребенка';
        if (!formData.childAge) newErrors.childAge = 'Введите возраст ребенка';
        if (formData.childAge && (formData.childAge < 7 || formData.childAge > 18)) newErrors.childAge = 'Возраст должен быть от 7 до 18 лет';
        if (!formData.parentName) newErrors.parentName = 'Введите ФИО родителя';
        if (!formData.parentPhone) newErrors.parentPhone = 'Введите телефон родителя';
        if (!formData.parentEmail) newErrors.parentEmail = 'Введите email родителя';
        if (!selectedCourse) newErrors.course = 'Выберите направление обучения';
        return newErrors;
    };
    
    const sendRealEmail = async (formData) => {
        const courseName = courses.find(c => c.id === selectedCourse)?.name;
        
        const templateParams = {
            to_email: formData.parentEmail,
            parentName: formData.parentName,
            childName: formData.childName,
            childAge: formData.childAge,
            courseName: courseName,
            parentPhone: formData.parentPhone
        };
        
        try {
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            console.log('✅ Письмо успешно отправлено:', response);
            return true;
        } catch (error) {
            console.error('❌ Ошибка отправки письма:', error);
            return false;
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            childName: e.target.childName?.value,
            childAge: e.target.childAge?.value,
            parentName: e.target.parentName?.value,
            parentPhone: e.target.parentPhone?.value,
            parentEmail: e.target.parentEmail?.value,
            course: selectedCourse
        };
        
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setErrors({});
        setIsSending(true);
        
        dispatch(addProductRequest(formData));
        
        const emailSent = await sendRealEmail(formData);
        
        setIsSending(false);
        
        if (emailSent) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
        }
    };
    
    const styles = {
        container: { maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' },
        title: { textAlign: 'center', fontSize: '2.5rem', color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '20px', position: 'relative', paddingBottom: '15px' },
        subtitle: { textAlign: 'center', fontSize: '1.2rem', color: theme === 'light' ? '#555' : '#ecf0f1', maxWidth: '700px', margin: '0 auto 50px' },
        grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' },
        infoCard: { background: theme === 'light' ? 'white' : '#2c3e50', borderRadius: '10px', padding: '40px', boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)' },
        formCard: { background: theme === 'light' ? 'white' : '#2c3e50', borderRadius: '10px', padding: '40px', boxShadow: theme === 'light' ? '0 4px 15px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.3)' },
        infoTitle: { fontSize: '1.5rem', color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '25px', paddingBottom: '15px', borderBottom: `2px solid ${theme === 'light' ? '#e0f7ff' : '#34495e'}` },
        infoList: { listStyle: 'none' },
        infoItem: { padding: '15px 0', borderBottom: `1px solid ${theme === 'light' ? '#eee' : '#444'}`, display: 'flex', alignItems: 'flex-start', gap: '15px' },
        infoIcon: { width: '40px', height: '40px', background: theme === 'light' ? '#e0f7ff' : '#34495e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2a8cba', fontSize: '1.2rem' },
        infoContentH4: { color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '5px' },
        infoContentP: { color: theme === 'light' ? '#555' : '#bbb', fontSize: '0.9rem' },
        formTitle: { fontSize: '1.5rem', color: theme === 'light' ? '#1a5f7a' : '#57c5f7', marginBottom: '30px', textAlign: 'center' },
        input: { width: '100%', padding: '15px', border: `2px solid ${theme === 'light' ? '#e1e5e9' : '#444'}`, borderRadius: '10px', fontSize: '1rem', marginBottom: '20px', background: theme === 'light' ? 'white' : '#34495e', color: theme === 'light' ? '#333' : 'white' },
        inputError: { border: '2px solid #f44336' },
        errorText: { color: '#f44336', fontSize: '0.85rem', marginTop: '-15px', marginBottom: '15px', display: 'block' },
        courseOption: (isSelected) => ({
            border: `2px solid ${isSelected ? '#2a8cba' : (theme === 'light' ? '#e1e5e9' : '#444')}`,
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '15px',
            cursor: 'pointer',
            background: isSelected ? (theme === 'light' ? '#e0f7ff' : '#34495e') : (theme === 'light' ? 'white' : '#2c3e50'),
            transition: 'all 0.3s ease',
            color: theme === 'light' ? '#333' : 'white'
        }),
        btn: { 
            width: '100%', 
            padding: '18px', 
            background: 'linear-gradient(to right, #2a8cba, #57c5f7)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '10px', 
            fontSize: '1.1rem', 
            fontWeight: 600, 
            cursor: 'pointer', 
            marginTop: '20px',
            opacity: isSending ? 0.6 : 1
        },
        success: { background: '#d4edda', color: '#155724', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center' }
    };
    
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Запись на курсы</h1>
            <p style={styles.subtitle}>Заполните форму ниже, чтобы записать ребенка на бесплатные курсы в IT-кубе Ковров.</p>
            
            <div style={styles.grid}>
                <div style={styles.infoCard}>
                    <h3 style={styles.infoTitle}>Важная информация</h3>
                    <ul style={styles.infoList}>
                        <li style={styles.infoItem}><div style={styles.infoIcon}><i className="fas fa-check-circle"></i></div><div><h4 style={styles.infoContentH4}>Бесплатное обучение</h4><p style={styles.infoContentP}>Все курсы абсолютно бесплатны</p></div></li>
                        <li style={styles.infoItem}><div style={styles.infoIcon}><i className="fas fa-users"></i></div><div><h4 style={styles.infoContentH4}>Возрастные группы</h4><p style={styles.infoContentP}>Принимаем детей от 7 до 18 лет</p></div></li>
                        <li style={styles.infoItem}><div style={styles.infoIcon}><i className="fas fa-calendar-alt"></i></div><div><h4 style={styles.infoContentH4}>Расписание занятий</h4><p style={styles.infoContentP}>Занятия 2-3 раза в неделю</p></div></li>
                        <li style={styles.infoItem}><div style={styles.infoIcon}><i className="fas fa-file-certificate"></i></div><div><h4 style={styles.infoContentH4}>Сертификат об окончании</h4><p style={styles.infoContentP}>Все выпускники получают сертификат</p></div></li>
                    </ul>
                </div>
                
                <div style={styles.formCard}>
                    <h3 style={styles.formTitle}>Форма записи</h3>
                    {submitted ? (
                        <div style={styles.success}>
                            <h4>Заявка успешно отправлена!</h4>
                            <p>Письмо с подтверждением отправлено на вашу почту. Мы свяжемся с вами в течение 2 рабочих дней.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>ФИО ребенка *</label>
                                <input type="text" name="childName" style={{...styles.input, ...(errors.childName ? styles.inputError : {})}} placeholder="Иванов Иван Иванович" required />
                                {errors.childName && <span style={styles.errorText}>{errors.childName}</span>}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Возраст ребенка *</label>
                                <input type="number" name="childAge" style={{...styles.input, ...(errors.childAge ? styles.inputError : {})}} min="7" max="18" placeholder="12" required />
                                {errors.childAge && <span style={styles.errorText}>{errors.childAge}</span>}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>ФИО родителя *</label>
                                <input type="text" name="parentName" style={{...styles.input, ...(errors.parentName ? styles.inputError : {})}} placeholder="Иванова Мария Петровна" required />
                                {errors.parentName && <span style={styles.errorText}>{errors.parentName}</span>}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Телефон родителя *</label>
                                <input type="tel" name="parentPhone" style={{...styles.input, ...(errors.parentPhone ? styles.inputError : {})}} placeholder="+7 (900) 123-45-67" required />
                                {errors.parentPhone && <span style={styles.errorText}>{errors.parentPhone}</span>}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email родителя *</label>
                                <input type="email" name="parentEmail" style={{...styles.input, ...(errors.parentEmail ? styles.inputError : {})}} placeholder="example@mail.ru" required />
                                {errors.parentEmail && <span style={styles.errorText}>{errors.parentEmail}</span>}
                            </div>
                            
                            <div>
                                <span style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Выберите направление *</span>
                                {courses.map(course => (
                                    <div key={course.id} onClick={() => setSelectedCourse(course.id)} style={styles.courseOption(selectedCourse === course.id)}>
                                        <strong>{course.name}</strong>
                                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px', color: '#666', fontSize: '0.9rem'}}>
                                            <span>{course.age}</span>
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>
                                ))}
                                {errors.course && <span style={styles.errorText}>{errors.course}</span>}
                            </div>
                            
                            <button type="submit" style={styles.btn} disabled={isSending}>
                                {isSending ? 'Отправка...' : 'Отправить заявку'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Enroll;