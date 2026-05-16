const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const courses = [
    { id: 1, name: 'Программирование на Python', description: 'Изучение основ Python', category: 'Программирование', price: 0, stock: 10 },
    { id: 2, name: 'Мобильная разработка', description: 'Создание приложений для Android', category: 'Разработка', price: 0, stock: 8 },
    { id: 3, name: 'Робототехника', description: 'Сборка и программирование роботов', category: 'Робототехника', price: 0, stock: 5 },
    { id: 4, name: 'Веб-разработка', description: 'Создание сайтов', category: 'Программирование', price: 0, stock: 12 },
    { id: 5, name: 'Кибербезопасность', description: 'Защита информации', category: 'Безопасность', price: 0, stock: 6 }
];

app.get('/products/all', (req, res) => {
    res.json({ products: courses });
});

app.get('/products/lim', (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const result = courses.slice(offset, offset + limit);
    res.json({ products: result });
});

app.post('/products/add', (req, res) => {
    console.log('Новый товар:', req.body);
    res.json({ success: true });
});

app.listen(8080, () => {
    console.log('Сервер запущен на порту 8080');
});