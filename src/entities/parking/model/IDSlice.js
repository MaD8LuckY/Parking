import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
}

export const IDSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setID: (state, action) => {
            state.id = action.payload
        },
    }
})

export const { setID } = IDSlice.actions
export default IDSlice.reducer