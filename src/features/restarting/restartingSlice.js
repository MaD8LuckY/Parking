import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNeed: false,
}

export const restartingSlice = createSlice({
    name: 'restart',
    initialState,
    reducers: {
        setNeed: (state, action) => {
            state.isNeed = action.payload
        },
    }
})

export const { setNeed } = restartingSlice.actions
export default restartingSlice.reducer