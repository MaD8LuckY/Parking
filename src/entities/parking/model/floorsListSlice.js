import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    floors: [],
    activeFloor: ''
}

export const floorsListSlice = createSlice({
    name: 'floorsList',
    initialState,
    reducers: {
        setFloors: (state, action) => {
            state.floors = action.payload
        },
        setActiveFloor: (state, action) => {
          state.activeFloor = action.payload
      },
    }
})

export const { setFloors, setActiveFloor } = floorsListSlice.actions
export default floorsListSlice.reducer