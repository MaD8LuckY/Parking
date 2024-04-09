import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
}

export const cancelReservationSlice = createSlice({
    name: 'cancelReservation',
    initialState,
    reducers: {
        setCancelReservationVisibility: (state, action) => {
            state.visibility = action.payload
        },
    }
})

export const { setCancelReservationVisibility } = cancelReservationSlice.actions
export default cancelReservationSlice.reducer