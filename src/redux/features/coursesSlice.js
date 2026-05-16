import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        list: [
            { id: 1, title: 'Программирование на Python', icon: 'fab fa-python', level: 'beginner', enrolled: false },
            { id: 2, title: 'Мобильная разработка', icon: 'fas fa-mobile-alt', level: 'intermediate', enrolled: false },
            { id: 3, title: 'Робототехника', icon: 'fas fa-robot', level: 'beginner', enrolled: false },
            { id: 4, title: 'Веб-разработка', icon: 'fas fa-globe', level: 'beginner', enrolled: false },
            { id: 5, title: 'Кибербезопасность', icon: 'fas fa-shield-alt', level: 'advanced', enrolled: false },
        ],
    },
    reducers: {
        enrollCourse: (state, action) => {
            const course = state.list.find(c => c.id === action.payload);
            if (course) {
                course.enrolled = true;
            }
        },
        unenrollCourse: (state, action) => {
            const course = state.list.find(c => c.id === action.payload);
            if (course) {
                course.enrolled = false;
            }
        },
    },
});

export const { enrollCourse, unenrollCourse } = coursesSlice.actions;
export default coursesSlice.reducer;