import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameSection: 'Карты',
}

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setNameSection: (state, action) => {
            state.nameSection = action.payload
        },
    }
})

export const { setNameSection } = sectionSlice.actions
export default sectionSlice.reducer