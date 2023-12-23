import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthrorization: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthrorization: (state, action) => {
            state.isAuthrorization = action.payload
        },
    }
})

export const { setAuthrorization } = authSlice.actions
export default authSlice.reducer