import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingVisibility: (state, action) => {
            state.visibility = action.payload
        },
    }
})

export const { setBookingVisibility } = bookingSlice.actions
export default bookingSlice.reducer