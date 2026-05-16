import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

// Комбинированный провайдер
export function AppProvider({ children }) {
    return (
        <ThemeProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ThemeProvider>
    );
}

export { useTheme } from './ThemeContext';
export { useUser } from './UserContext';