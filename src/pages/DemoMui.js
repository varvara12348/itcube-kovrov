import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton, Container,
    Card, CardContent, CardMedia, CardActions, Grid, TextField,
    Modal, Box, Tabs, Tab, Badge, Avatar, Chip, Pagination,
    Drawer, List, ListItem, ListItemText, ListItemIcon,
    Switch, FormControlLabel, Paper, Rating, LinearProgress,
    Alert, Snackbar, Stepper, Step, StepLabel
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const DemoMui = () => {
    const [openModal, setOpenModal] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    // Данные для карточек
    const courses = [
        { id: 1, title: 'Программирование на Python', desc: 'Изучение основ Python', icon: '🐍', level: 'Начальный', students: 45 },
        { id: 2, title: 'Мобильная разработка', desc: 'Создание приложений для Android', icon: '📱', level: 'Средний', students: 32 },
        { id: 3, title: 'Робототехника', desc: 'Сборка и программирование роботов', icon: '🤖', level: 'Продвинутый', students: 28 },
        { id: 4, title: 'Веб-разработка', desc: 'Создание сайтов на React', icon: '🌐', level: 'Начальный', students: 38 },
        { id: 5, title: 'Кибербезопасность', desc: 'Защита информации', icon: '🔒', level: 'Продвинутый', students: 22 }
    ];

    // Пагинация
    const itemsPerPage = 3;
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #1976d2',
        borderRadius: 2,
        p: 4,
    };

    return (
        <div style={{ backgroundColor: darkMode ? '#121212' : '#f5f5f5', minHeight: '100vh' }}>
            
            {/* ПАНЕЛЬ НАВИГАЦИИ (AppBar) */}
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        IT-куб Ковров
                    </Typography>
                    <Button color="inherit">Главная</Button>
                    <Button color="inherit">Направления</Button>
                    <Button color="inherit">Запись</Button>
                    <Button color="inherit">Контакты</Button>
                    <FormControlLabel control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />} label="🌙" />
                </Toolbar>
            </AppBar>

            {/* DRAWER (боковое меню) */}
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 250 }}>
                    <ListItem>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Главная" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><SchoolIcon /></ListItemIcon>
                        <ListItemText primary="Направления" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CodeIcon /></ListItemIcon>
                        <ListItemText primary="Запись" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                        <ListItemText primary="Контакты" />
                    </ListItem>
                </List>
            </Drawer>

            <Container sx={{ py: 4 }}>
                {/* ЗАГОЛОВОК */}
                <Typography variant="h3" align="center" gutterBottom>
                    IT-куб Ковров
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
                    Центр цифрового образования детей
                </Typography>
                <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                    IT-куб Ковров — современная площадка, где дети от 7 до 18 лет осваивают востребованные IT-навыки.
                </Typography>
                <Typography variant="body2" align="center" sx={{ mb: 4 }}>
                    Студент: Горбунова В.П. | Группа: ИРспк-223 | 12.03.2026
                </Typography>

                {/* КНОПКИ (Button) */}
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h5" gutterBottom>1. Кнопки (Button)</Typography>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button variant="contained" color="success">Success</Button>
                        <Button variant="contained" color="error">Error</Button>
                        <Button variant="contained" color="warning">Warning</Button>
                        <Button size="small" variant="contained">Small</Button>
                        <Button size="large" variant="contained">Large</Button>
                    </div>
                </Paper>

                {/* ВКЛАДКИ (Tabs) */}
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h5" gutterBottom>2. Вкладки (Tabs)</Typography>
                    <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} centered>
                        <Tab label="Python" />
                        <Tab label="Mobile" />
                        <Tab label="Robotics" />
                        <Tab label="Web" />
                    </Tabs>
                    <Typography sx={{ mt: 2, textAlign: 'center' }}>
                        {activeTab === 0 && 'Вы выбрали Python'}
                        {activeTab === 1 && 'Вы выбрали Mobile'}
                        {activeTab === 2 && 'Вы выбрали Robotics'}
                        {activeTab === 3 && 'Вы выбрали Web'}
                    </Typography>
                </Paper>

                {/* КАРТОЧКИ (Card) С ПАГИНАЦИЕЙ */}
                <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
                    3. Направления обучения (Card + Pagination)
                </Typography>
                
                <Grid container spacing={3}>
                    {currentCourses.map(course => (
                        <Grid item xs={12} md={4} key={course.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    <div style={{ fontSize: '3rem' }}>{course.icon}</div>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {course.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {course.desc}
                                    </Typography>
                                    <Chip label={course.level} color="primary" size="small" sx={{ mt: 1 }} />
                                    <Badge badgeContent={course.students} color="secondary" sx={{ mt: 1, ml: 1 }}>
                                        <SchoolIcon />
                                    </Badge>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => setOpenModal(true)}>Записаться</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* ПАГИНАЦИЯ (Pagination) */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Pagination 
                        count={totalPages} 
                        page={currentPage} 
                        onChange={(e, page) => setCurrentPage(page)} 
                        color="primary" 
                        size="large"
                    />
                </div>

                {/* ФОРМА (TextField) */}
                <Paper sx={{ p: 4, my: 4 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        4. Форма (Form)
                    </Typography>
                    <div style={{ maxWidth: 500, margin: '0 auto' }}>
                        <TextField fullWidth label="ФИО ребенка" margin="normal" variant="outlined" />
                        <TextField fullWidth label="Возраст" type="number" margin="normal" variant="outlined" />
                        <TextField fullWidth label="Телефон родителя" margin="normal" variant="outlined" />
                        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => setSnackbarOpen(true)}>
                            Отправить заявку
                        </Button>
                    </div>
                </Paper>

                {/* БЕЙДЖИ И АВАТАРЫ (Badge + Avatar) */}
                <Paper sx={{ p: 3, textAlign: 'center', mb: 4 }}>
                    <Typography variant="h5" gutterBottom>5. Статистика (Badge + Avatar)</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div>
                            <Badge badgeContent={180} color="primary">
                                <Avatar sx={{ width: 56, height: 56, bgcolor: '#1976d2' }}>
                                    <SchoolIcon />
                                </Avatar>
                            </Badge>
                            <Typography>Учеников</Typography>
                        </div>
                        <div>
                            <Badge badgeContent={5} color="success">
                                <Avatar sx={{ width: 56, height: 56, bgcolor: '#2e7d32' }}>
                                    <CodeIcon />
                                </Avatar>
                            </Badge>
                            <Typography>Направлений</Typography>
                        </div>
                        <div>
                            <Rating value={4.8} precision={0.5} readOnly />
                            <Typography>Рейтинг</Typography>
                        </div>
                    </div>
                </Paper>

                {/* LINEAR PROGRESS - дополнительный компонент */}
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h5" gutterBottom>6. Индикатор прогресса (LinearProgress)</Typography>
                    <Typography>Набор на курсы Python:</Typography>
                    <LinearProgress variant="determinate" value={75} sx={{ mb: 2, height: 10, borderRadius: 5 }} />
                    <Typography>Набор на курсы Mobile:</Typography>
                    <LinearProgress variant="determinate" value={45} sx={{ height: 10, borderRadius: 5 }} />
                </Paper>

                {/* КОНТАКТЫ С ИКОНКАМИ */}
                <Paper sx={{ p: 3, textAlign: 'center', mb: 4 }}>
                    <Typography variant="h5" gutterBottom>7. Контакты</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <Chip icon={<PhoneIcon />} label="+7 (49232) 2-22-33" variant="outlined" />
                        <Chip icon={<EmailIcon />} label="info@itcube-kovrov.ru" variant="outlined" />
                    </div>
                </Paper>

                {/* SNACKBAR (всплывающее уведомление) */}
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
                    <Alert onClose={() => setSnackbarOpen(false)} severity="success">
                        Заявка успешно отправлена!
                    </Alert>
                </Snackbar>

                {/* МОДАЛЬНОЕ ОКНО (Modal) */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
                        8. Открыть модальное окно
                    </Button>
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                    <Box sx={modalStyle}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Модальное окно Material-UI
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Это пример модального окна из библиотеки Material-UI.
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                            <Button onClick={() => setOpenModal(false)} variant="contained">Закрыть</Button>
                        </div>
                    </Box>
                </Modal>

                {/* ПОДВАЛ */}
                <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, mt: 5, textAlign: 'center', borderRadius: 2 }}>
                    <Typography>
                        &copy; 2026 IT-куб Ковров | Студент: Горбунова В.П. | Группа: ИРспк-223
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default DemoMui;