import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Горбунова В.П.',
        group: 'ИРспк-223',
        role: 'student',
    },
    reducers: {
        updateUserName: (state, action) => {
            state.name = action.payload;
        },
        updateUserGroup: (state, action) => {
            state.group = action.payload;
        },
    },
});

export const { updateUserName, updateUserGroup } = userSlice.actions;
export default userSlice.reducer;