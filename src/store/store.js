import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "../features/booking/bookingSlice";
import noBookingSlice from "../features/noBooking/noBookingSlice";
import authSlice  from "../features/auth/authSlice";
import itemSlice from "../features/item/itemSlice";
import restartingSlice from "../features/restarting/restartingSlice";

export const store = configureStore({
    reducer: {
        booking : bookingSlice,
        noBooking : noBookingSlice,
        auth: authSlice,
        item: itemSlice,
        restart: restartingSlice,
    },
})