import { configureStore } from "@reduxjs/toolkit";

import reservationSlice from "../widgets/form-reser/reservation/reservationSlice";
import cancelReservationSlice from "../widgets/form-cancel-reser/cancelReservation/cancelReservationSlice";
import IDSlice from "../entities/parking/model/IDSlice";
import restartingSlice from "../entities/parking/model/restartingSlice";
import placesListSlice from "../entities/parking/model/placesListSlice";
import floorsListSlice from "../entities/parking/model/floorsListSlice";
import adminSlice from "../entities/admins/model/adminSlice";

export const store = configureStore({
    reducer: {
        reservation: reservationSlice,
        cancelReservation: cancelReservationSlice,
        id: IDSlice,
        restart: restartingSlice,
        placesList: placesListSlice,
        floorsList: floorsListSlice,
        admin: adminSlice
    },
})