import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    carNumber: '',
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setID: (state, action) => {
            state.id = action.payload
        },
        setCarNumber: (state, action) => {
            state.carNumber = action.payload
        },
    }
})

export const { setID, setCarNumber } = itemSlice.actions
export default itemSlice.reducer