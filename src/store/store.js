import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "../features/booking/bookingSlice";
import noBookingSlice from "../features/noBooking/noBookingSlice";
import sectionSlice  from "../features/section/sectionSlice";
import IDSlice from "../features/ID/IDSlice";
import restartingSlice from "../features/restarting/restartingSlice";

export const store = configureStore({
    reducer: {
        booking : bookingSlice,
        noBooking : noBookingSlice,
        section: sectionSlice,
        id: IDSlice,
        restart: restartingSlice,
    },
})