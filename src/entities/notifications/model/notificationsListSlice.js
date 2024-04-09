import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    map: [],
    analitics: []
}

export const notifictionsListSlice = createSlice({
    name: 'notifictionsList',
    initialState,
    reducers: {
        setMap: (state, action) => {
            state.map = action.payload
        },
        setAnalitics: (state, action) => {
          state.analitics = action.payload
      },
    }
})

export const { setMap, setAnalitics } = notifictionsListSlice.actions
export default notifictionsListSlice.reducer