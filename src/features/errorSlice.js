import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: "error",
    initialState: {
        msg: null
    },

    reducers: {
        setErrorMsg : (state, action) => {
            state.msg = action.payload
        },
        removeErrors : (state) => {
            state.msg = null
        }
    }
});

export const { setErrorMsg, removeErrors } = errorSlice.actions;

export const getError = (state) => state.msg;

export default errorSlice.reducer;