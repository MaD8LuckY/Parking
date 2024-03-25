import styleMap from './CSS/Map.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { setNoBookingVisibility } from "../features/noBooking/noBookingSlice"
import { setBookingVisibility } from '../features/booking/bookingSlice'
import { setID } from "../features/ID/IDSlice";

const Map = ({ floor }) => {

  const dispatch = useDispatch();
  const places = useSelector((state) => state.placesList.places)

  const booking = (id) => {
    dispatch(setBookingVisibility(true))
    dispatch(setID(id));
  }

  const noBooking = (id) => { // форма "Освободить место"
    dispatch(setNoBookingVisibility(true))
    dispatch(setID(id));
  }

  switch (floor) {
    case 1:
      return <div className={styleMap.div}>
        <h2 className={styleMap.h2}>Карта парковки</h2>
        
      </div>

    case 2:
      return <div className={styleMap.div}>
        <h2 className={styleMap.h2}>Карта парковки</h2>
        
      </div>

    default:
      return 0
  }
}

export default Map;