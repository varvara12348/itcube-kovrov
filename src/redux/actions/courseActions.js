import axios from 'axios';

// Экшен для успешной загрузки курсов
export const fetchCoursesSuccess = (courses) => ({
    type: 'FETCH_COURSES_SUCCESS',
    payload: courses
});

// Экшен для ошибки загрузки
export const fetchCoursesError = (error) => ({
    type: 'FETCH_COURSES_ERROR',
    payload: error
});

// Экшен для записи на курс
export const enrollCourse = (courseId) => ({
    type: 'ENROLL_COURSE',
    payload: courseId
});

// Thunk-функция для загрузки курсов с сервера
export const fetchCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8080/products/all');
            dispatch(fetchCoursesSuccess(response.data.products));
        } catch (error) {
            dispatch(fetchCoursesError(error.message));
        }
    };
};