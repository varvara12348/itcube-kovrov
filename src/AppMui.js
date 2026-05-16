import React, { useState } from 'react';
import { 
    AppBar, Toolbar, Typography, Button, IconButton, Container, 
    Card, CardContent, CardMedia, CardActions, Grid, TextField, 
    Modal, Box, Tabs, Tab, Badge, Avatar, Chip, Pagination,
    Drawer, List, ListItem, ListItemText, Switch, FormControlLabel
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AppMui() {
    const [openModal, setOpenModal] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const courses = [
        { id: 1, title: 'Программирование на Python', description: 'Изучение основ Python с нуля', image: 'https://via.placeholder.com/300x150?text=Python', level: 'Начальный' },
        { id: 2, title: 'Мобильная разработка', description: 'Создание приложений для Android', image: 'https://via.placeholder.com/300x150?text=Mobile', level: 'Средний' },
        { id: 3, title: 'Робототехника', description: 'Сборка и программирование роботов', image: 'https://via.placeholder.com/300x150?text=Robotics', level: 'Продвинутый' }
    ];

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #1976d2',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            {/* Панель навигации (AppBar + Drawer) */}
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
                    <Button color="inherit">Контакты</Button>
                    <FormControlLabel control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />} label="Тема" />
                </Toolbar>
            </AppBar>

            {/* Drawer (боковое меню) - дополнительный компонент */}
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 250 }}>
                    <ListItem><ListItemText primary="Главная" /></ListItem>
                    <ListItem><ListItemText primary="Направления" /></ListItem>
                    <ListItem><ListItemText primary="Расписание" /></ListItem>
                    <ListItem><ListItemText primary="Преподаватели" /></ListItem>
                    <ListItem><ListItemText primary="Контакты" /></ListItem>
                </List>
            </Drawer>

            {/* Карточки */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Наши направления
                </Typography>
                <Grid container spacing={3}>
                    {courses.map(course => (
                        <Grid item xs={12} md={4} key={course.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia component="img" height="140" image={course.image} alt={course.title} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {course.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {course.description}
                                    </Typography>
                                    <Chip label={course.level} color="primary" size="small" sx={{ mt: 1 }} />
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => setOpenModal(true)}>Записаться</Button>
                                    <Button size="small" color="secondary">Подробнее</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Форма (TextField) */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Запись на курсы
                </Typography>
                <Box component="form" sx={{ maxWidth: 500, mx: 'auto' }}>
                    <TextField fullWidth label="ФИО ребенка" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Возраст" type="number" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Телефон родителя" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Email" type="email" margin="normal" variant="outlined" />
                    <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                        Отправить заявку
                    </Button>
                </Box>
            </Container>

            {/* Дополнительные компоненты: Badge, Avatar, Tabs, Pagination */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Наша статистика
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Badge badgeContent={500} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#1976d2' }}>
                                <SchoolIcon />
                            </Avatar>
                        </Badge>
                        <Typography align="center">Учеников</Typography>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={10} color="success" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: '#2e7d32' }}>
                                <SchoolIcon />
                            </Avatar>
                        </Badge>
                        <Typography align="center">Направлений</Typography>
                    </Grid>
                </Grid>
                
                <Box sx={{ mt: 4 }}>
                    <Tabs value={0} centered>
                        <Tab label="Python" />
                        <Tab label="Mobile" />
                        <Tab label="Robotics" />
                        <Tab label="Web" />
                    </Tabs>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Pagination count={5} color="primary" />
                </Box>
            </Container>

            {/* Контакты с иконками */}
            <Container sx={{ my: 4 }} id="contact">
                <Typography variant="h5" align="center" gutterBottom>
                    Контакты
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Chip icon={<PhoneIcon />} label="+7 (49232) 2-22-33" variant="outlined" />
                    <Chip icon={<EmailIcon />} label="info@itcube-kovrov.ru" variant="outlined" />
                </Box>
            </Container>

            {/* Модальное окно */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Запись на курс
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Вы успешно записаны на курс! Наш администратор свяжется с вами в ближайшее время.
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => setOpenModal(false)} variant="contained">OK</Button>
                    </Box>
                </Box>
            </Modal>

            {/* Footer */}
            <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, mt: 5, textAlign: 'center' }}>
                <Typography>&copy; 2026 IT-куб Ковров | Студент: Горбунова В.П. | Группа: ИРспк-223</Typography>
            </Box>
        </div>
    );
}

export default AppMui;