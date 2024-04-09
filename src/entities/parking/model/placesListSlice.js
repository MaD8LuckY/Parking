import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    places: [],
}

export const placesListSlice = createSlice({
    name: 'placesList',
    initialState,
    reducers: {
        setPlaces: (state, action) => {
            state.places = action.payload
        },
    }
})

export const { setPlaces } = placesListSlice.actions
export default placesListSlice.reducer