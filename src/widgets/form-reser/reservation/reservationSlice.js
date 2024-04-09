import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservationVisibility: (state, action) => {
            state.visibility = action.payload
        },
    }
})

export const { setReservationVisibility } = reservationSlice.actions
export default reservationSlice.reducer