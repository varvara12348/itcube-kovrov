const initialState = {
    courses: [],
    loading: false,
    error: null
};

const courseReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSES_SUCCESS':
            return {
                ...state,
                courses: action.payload.map(course => ({ ...course, enrolled: false })),
                loading: false,
                error: null
            };
        case 'FETCH_COURSES_ERROR':
            return {
                ...state,
                courses: [],
                loading: false,
                error: action.payload
            };
        case 'ENROLL_COURSE':
            return {
                ...state,
                courses: state.courses.map(course =>
                    course.id === action.payload
                        ? { ...course, enrolled: true }
                        : course
                )
            };
        default:
            return state;
    }
};

export default courseReducers;