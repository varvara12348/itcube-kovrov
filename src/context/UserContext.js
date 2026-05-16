import { createContext, useContext, useState } from 'react';

// Создание контекста пользователя
const UserContext = createContext(null);

// Провайдер пользователя
export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: 'Иванов И.И.',
        group: 'ИТ-21',
        role: 'student'
    });
    
    const updateUser = (newUserData) => {
        setUser(prev => ({ ...prev, ...newUserData }));
    };
    
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Кастомный хук для использования пользователя
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser должен использоваться внутри UserProvider');
    }
    return context;
}