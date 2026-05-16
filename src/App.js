import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import PhotoUpload from './components/PhotoUpload';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Enroll = lazy(() => import('./pages/Enroll'));

function App() {
    return (
        <Router>
            <div className="App">
                <a href="#main-content" className="skip-link">
                    Перейти к основному содержанию
                </a>
                <Header />
                <main id="main-content" tabIndex="-1">
                    <Suspense fallback={<div className="loading-spinner">Загрузка страницы...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/enroll" element={<Enroll />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<PhotoUpload />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;