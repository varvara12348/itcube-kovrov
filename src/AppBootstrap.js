import React, { useState } from 'react';
import { 
    Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, 
    Card, CardGroup, Carousel, Modal, Row, Col, Badge, Spinner, 
    ProgressBar, Breadcrumb, Pagination, Alert, Accordion, ListGroup,
    Table, Tabs, Tab, Stack, Image, InputGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppBootstrap() {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [activeTab, setActiveTab] = useState('courses');

    const courses = [
        { id: 1, title: 'Программирование на Python', desc: 'Изучение основ Python', icon: '🐍', level: 'Начальный', students: 45 },
        { id: 2, title: 'Мобильная разработка', desc: 'Создание приложений для Android', icon: '📱', level: 'Средний', students: 32 },
        { id: 3, title: 'Робототехника', desc: 'Сборка и программирование роботов', icon: '🤖', level: 'Продвинутый', students: 28 },
        { id: 4, title: 'Веб-разработка', desc: 'Создание сайтов на React', icon: '🌐', level: 'Начальный', students: 38 },
        { id: 5, title: 'Кибербезопасность', desc: 'Защита информации', icon: '🔒', level: 'Продвинутый', students: 22 },
        { id: 6, title: 'VR/AR разработка', desc: 'Виртуальная реальность', icon: '🥽', level: 'Средний', students: 15 }
    ];

    const achievements = [
        { title: 'Учеников', value: 180, icon: '👨‍🎓', color: 'primary' },
        { title: 'Направлений', value: 6, icon: '📚', color: 'success' },
        { title: 'Побед', value: 47, icon: '🏆', color: 'warning' },
        { title: 'Проектов', value: 89, icon: '💻', color: 'info' }
    ];

    return (
        <div>
            {/* ========== 1. ПАНЕЛЬ НАВИГАЦИИ (NAVBAR) ========== */}
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="logo.jpg" width="40" height="40" className="d-inline-block align-top me-2" alt="logo" />
                        IT-куб Ковров
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" active>Главная</Nav.Link>
                            <Nav.Link href="#courses">Направления</Nav.Link>
                            <Nav.Link href="#form">Запись</Nav.Link>
                            <NavDropdown title="О нас" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#about">О центре</NavDropdown.Item>
                                <NavDropdown.Item href="#teachers">Преподаватели</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#contacts">Контакты</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Поиск курсов..." className="me-2" />
                            <Button variant="outline-light">Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ========== 2. КАРУСЕЛЬ (CAROUSEL) ========== */}
            <Carousel fade interval={4000}>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/1200x400/1a5f7a/white?text=IT-куб+Ковров" alt="First" style={{ height: '400px', objectFit: 'cover' }} />
                    <Carousel.Caption>
                        <h3>Добро пожаловать в IT-куб Ковров</h3>
                        <p>Центр цифрового образования детей от 7 до 18 лет</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/1200x400/2a8cba/white?text=Бесплатное+обучение" alt="Second" style={{ height: '400px', objectFit: 'cover' }} />
                    <Carousel.Caption>
                        <h3>Бесплатное обучение</h3>
                        <p>Все курсы бесплатны благодаря государственной поддержке</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/1200x400/57c5f7/white?text=Современное+оборудование" alt="Third" style={{ height: '400px', objectFit: 'cover' }} />
                    <Carousel.Caption>
                        <h3>Современное оборудование</h3>
                        <p>VR-шлемы, роботы, 3D-принтеры, интерактивные комплексы</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* ========== 3. КНОПКИ (BUTTONS) ========== */}
            <Container className="my-4 text-center">
                <h3>Варианты кнопок</h3>
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="outline-primary">Outline Primary</Button>
                    <Button variant="outline-danger">Outline Danger</Button>
                    <Button size="lg">Large</Button>
                    <Button size="sm">Small</Button>
                </Stack>
            </Container>

            {/* ========== 4. ХЛЕБНЫЕ КРОШКИ (Breadcrumb) - доп. компонент ========== */}
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="#courses">Направления</Breadcrumb.Item>
                    <Breadcrumb.Item active>Программирование на Python</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            {/* ========== 5. КАРТОЧКИ (CARDS) ========== */}
            <Container className="my-5" id="courses">
                <h2 className="text-center mb-4">Наши направления</h2>
                <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3" justify>
                    <Tab eventKey="courses" title="Все курсы"></Tab>
                    <Tab eventKey="popular" title="Популярные"></Tab>
                    <Tab eventKey="new" title="Новые"></Tab>
                </Tabs>
                
                <CardGroup>
                    {courses.map(course => (
                        <Card key={course.id} className="m-2 shadow-sm" style={{ minWidth: '250px' }}>
                            <Card.Body className="text-center">
                                <div style={{ fontSize: '3rem' }}>{course.icon}</div>
                                <Card.Title className="mt-2">{course.title}</Card.Title>
                                <Card.Text>{course.desc}</Card.Text>
                                <Badge bg={course.level === 'Начальный' ? 'success' : course.level === 'Средний' ? 'warning' : 'danger'} pill>
                                    {course.level}
                                </Badge>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>Записаться</Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardGroup>
            </Container>

            {/* ========== 6. КАРТОЧКИ С ДОСТИЖЕНИЯМИ С БЕЙДЖАМИ ========== */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Наши достижения</h2>
                <Row>
                    {achievements.map((item, idx) => (
                        <Col md={3} key={idx} className="text-center mb-3">
                            <Card className="p-3">
                                <div style={{ fontSize: '3rem' }}>{item.icon}</div>
                                <h3><Badge bg={item.color} pill>{item.value}</Badge></h3>
                                <h5>{item.title}</h5>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* ========== 7. АККОРДЕОН (Accordion) - доп. компонент ========== */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Часто задаваемые вопросы</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Сколько стоят курсы?</Accordion.Header>
                        <Accordion.Body>
                            Все курсы в IT-кубе абсолютно бесплатны благодаря поддержке Министерства просвещения РФ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Как записаться на курсы?</Accordion.Header>
                        <Accordion.Body>
                            Заполните форму на нашем сайте, и администратор свяжется с вами для подтверждения записи.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Какой возраст для обучения?</Accordion.Header>
                        <Accordion.Body>
                            Мы принимаем детей от 7 до 18 лет. Группы формируются по возрасту и уровню подготовки.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            {/* ========== 8. ФОРМА (FORM) ========== */}
            <Container className="my-5" id="form">
                <h2 className="text-center mb-4">Запись на курсы</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>ФИО ребенка *</Form.Label>
                                <Form.Control type="text" placeholder="Введите ФИО" required />
                                <Form.Text className="text-muted">Как в свидетельстве о рождении</Form.Text>
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formAge">
                                        <Form.Label>Возраст *</Form.Label>
                                        <Form.Control type="number" placeholder="7-18" min="7" max="18" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCourse">
                                        <Form.Label>Направление *</Form.Label>
                                        <Form.Select>
                                            <option>Программирование на Python</option>
                                            <option>Мобильная разработка</option>
                                            <option>Робототехника</option>
                                            <option>Веб-разработка</option>
                                            <option>Кибербезопасность</option>
                                            <option>VR/AR разработка</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Телефон родителя *</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>+7</InputGroup.Text>
                                            <Form.Control type="tel" placeholder="(900) 123-45-67" />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email родителя</Form.Label>
                                        <Form.Control type="email" placeholder="example@mail.ru" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formCheckbox">
                                <Form.Check type="checkbox" label="Я согласен на обработку персональных данных" required />
                            </Form.Group>

                            <Button variant="success" type="submit" className="w-100" onClick={() => setShowAlert(true)}>
                                Отправить заявку
                            </Button>

                            {showAlert && (
                                <Alert variant="success" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                                    Заявка успешно отправлена! Мы свяжемся с вами в течение 2 рабочих дней.
                                </Alert>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* ========== 9. ПРОГРЕСС-БАР И СПИННЕР (ProgressBar + Spinner) ========== */}
            <Container className="my-5 text-center">
                <h2 className="text-center mb-4">Наша статистика</h2>
                <Row>
                    <Col md={4}>
                        <Spinner animation="border" variant="primary" />
                        <h4 className="mt-2">500+ учеников</h4>
                        <ProgressBar now={75} label="75%" variant="primary" />
                        <span>План набора выполнен на 75%</span>
                    </Col>
                    <Col md={4}>
                        <Spinner animation="grow" variant="success" />
                        <h4 className="mt-2">10+ направлений</h4>
                        <ProgressBar now={60} label="60%" variant="success" />
                        <span>Развитие новых направлений</span>
                    </Col>
                    <Col md={4}>
                        <Spinner animation="border" variant="warning" />
                        <h4 className="mt-2">47 побед</h4>
                        <ProgressBar now={94} label="94%" variant="warning" />
                        <span>Успешных выступлений</span>
                    </Col>
                </Row>
            </Container>

            {/* ========== 10. ТАБЛИЦА (Table) - доп. компонент ========== */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Расписание занятий</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Время</th>
                            <th>Понедельник</th>
                            <th>Вторник</th>
                            <th>Среда</th>
                            <th>Четверг</th>
                            <th>Пятница</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15:00 - 16:30</td>
                            <td>Python</td>
                            <td>Mobile</td>
                            <td>Robotics</td>
                            <td>Web</td>
                            <td>Python</td>
                        </tr>
                        <tr>
                            <td>17:00 - 18:30</td>
                            <td>Web</td>
                            <td>Robotics</td>
                            <td>Python</td>
                            <td>Mobile</td>
                            <td>CyberSec</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            {/* ========== 11. ПАГИНАЦИЯ (Pagination) ========== */}
            <Container className="my-4">
                <Pagination className="justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>

            {/* ========== 12. LIST GROUP - доп. компонент ========== */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Наши партнеры</h2>
                <ListGroup horizontal className="justify-content-center">
                    <ListGroup.Item>Институт Конфуция</ListGroup.Item>
                    <ListGroup.Item>МГУ им. Ломоносова</ListGroup.Item>
                    <ListGroup.Item>Китайский культурный центр</ListGroup.Item>
                    <ListGroup.Item>Академия наук РФ</ListGroup.Item>
                </ListGroup>
            </Container>

            {/* ========== 13. МОДАЛЬНОЕ ОКНО (MODAL) ========== */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Запись на курс</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Вы выбрали курс</h5>
                    <p>Наш администратор свяжется с вами в ближайшее время для подтверждения записи.</p>
                    <Alert variant="info">Пожалуйста, ожидайте звонка в течение 2 рабочих дней.</Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Закрыть</Button>
                    <Button variant="primary" onClick={() => setShowModal(false)}>OK</Button>
                </Modal.Footer>
            </Modal>

            {/* ========== 14. ПОДВАЛ (FOOTER) ========== */}
            <footer className="bg-dark text-white text-center py-4 mt-5">
                <Container>
                    <Image src="logo.jpg" roundedCircle width="60" height="60" className="mb-3" />
                    <p>&copy; 2026 IT-куб Ковров. Все права защищены.</p>
                    <p>Студент: Горбунова В.П. | Группа: ИРспк-223 | 12.03.2026</p>
                    <div className="mt-3">
                        <Button variant="outline-light" size="sm" className="me-2">VK</Button>
                        <Button variant="outline-light" size="sm" className="me-2">Telegram</Button>
                        <Button variant="outline-light" size="sm">YouTube</Button>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default AppBootstrap;