import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
}

export const noBookingSlice = createSlice({
    name: 'noBooking',
    initialState,
    reducers: {
        setNoBookingVisibility: (state, action) => {
            state.visibility = action.payload
        },
    }
})

export const { setNoBookingVisibility } = noBookingSlice.actions
export default noBookingSlice.reducer