import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        err: null
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null
        },
        register: (state, action) => {
            state.user = action.payload
        },
        update : (state, action) => {
            state.user = action.payload
        },
        changePassword : (state, action) => {
            state.user = action.payload
        }
    }
});

export const { login, logout, register, update, changePassword } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;