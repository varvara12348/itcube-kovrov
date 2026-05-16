import React from 'react';

const TeachersList = () => {
    // Массив преподавателей
    const teachers = [
        { id: 1, name: 'Иванов Иван', subject: 'Python', experience: 5, photo: '👨‍🏫' },
        { id: 2, name: 'Петрова Анна', subject: 'Мобильная разработка', experience: 3, photo: '👩‍🏫' },
        { id: 3, name: 'Сидоров Петр', subject: 'Робототехника', experience: 7, photo: '👨‍🔧' },
        { id: 4, name: 'Кузнецова Елена', subject: 'Веб-разработка', experience: 4, photo: '👩‍💻' },
        { id: 5, name: 'Смирнов Дмитрий', subject: 'Кибербезопасность', experience: 6, photo: '👨‍💻' }
    ];
    
    // Способ 1: map с фильтрацией (только преподаватели с опытом > 4 лет)
    const experiencedTeachers = teachers
        .filter(teacher => teacher.experience > 4)
        .map(teacher => (
            <div key={teacher.id} style={{
                background: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
                <span style={{ fontSize: '2rem', marginRight: '10px' }}>{teacher.photo}</span>
                <div>
                    <strong>{teacher.name}</strong> - {teacher.subject}
                    <br />
                    <small>Опыт: {teacher.experience} лет</small>
                </div>
            </div>
        ));
    
    // Способ 2: for...of цикл
    const renderWithForOf = () => {
        let content = [];
        for (let teacher of teachers) {
            content.push(
                <div key={teacher.id} style={{ padding: '5px 0' }}>
                    • {teacher.name} ({teacher.subject})
                </div>
            );
        }
        return content;
    };
    
    return (
        <div style={{ padding: '40px 0', background: '#f8f9fa' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Наши преподаватели
                </h2>
                
                <h3>Список всех преподавателей (for...of):</h3>
                <div style={{ marginBottom: '30px' }}>
                    {renderWithForOf()}
                </div>
              <h3>Преподаватели (filter + map):</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px',
                    marginTop: '15px'
                }}>
                  {experiencedTeachers}
                </div>
                {/* Информация о студенте */}
                <div style={{
                    marginTop: '40px',
                    padding: '20px',
                    background: '#e3f2fd',
                    borderRadius: '10px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '1.1rem', margin: 0 }}>
                        <strong>Студент:</strong> [Горбунова В.П.] | 
                        <strong> Группа:</strong> [ИРспк-223] | 
                        <strong> Дата:</strong> {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeachersList;