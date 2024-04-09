import { configureStore } from "@reduxjs/toolkit";

import bookingSlice from "../chlamochranilishe/booking/bookingSlice";
import noBookingSlice from "../chlamochranilishe/noBooking/noBookingSlice";
import IDSlice from "../chlamochranilishe/ID/IDSlice";
import restartingSlice from "../chlamochranilishe/restarting/restartingSlice";
import placesListSlice from "../entities/parking/model/placesListSlice";
import floorsListSlice from '../entities/parking/model/floorsListSlice'

export const store = configureStore({
    reducer: {
        booking : bookingSlice,
        noBooking : noBookingSlice,
        id: IDSlice,
        restart: restartingSlice,
        placesList: placesListSlice,
        floorsList: floorsListSlice,
    },
})