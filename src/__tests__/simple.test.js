// Простой тест для проверки работы Jest
describe('Простые тесты', () => {
    test('проверка сложения чисел', () => {
        expect(2 + 2).toBe(4);
    });

    test('проверка строки', () => {
        expect('IT-куб Ковров').toContain('Ковров');
    });

    test('проверка массива', () => {
        const courses = ['Python', 'Mobile', 'Robotics'];
        expect(courses).toHaveLength(3);
        expect(courses).toContain('Python');
    });

    test('проверка объекта', () => {
        const user = { name: 'Горбунова В.П.', group: 'ИРспк-223' };
        expect(user.name).toBe('Горбунова В.П.');
        expect(user.group).toBe('ИРспк-223');
    });

    test('проверка на true/false', () => {
        const isActive = true;
        const isLoaded = false;
        expect(isActive).toBeTruthy();
        expect(isLoaded).toBeFalsy();
    });
});