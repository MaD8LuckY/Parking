import { useDispatch } from "react-redux"
import { setNoBookingVisibility } from "../features/noBooking/noBookingSlice"
import stylesListUsers from './ListUsers.module.css';
import { setBookingVisibility } from '../features/booking/bookingSlice'
import { setID } from "../features/item/itemSlice";


const ListUsers = ({ place }) => {
  const dispatch = useDispatch()


  const booking = () => { // форма "Занять место"
    dispatch(setBookingVisibility(true))
    dispatch(setID(place.id));
  }

  const noBooking = () => { // форма "Освободить место"
    dispatch(setNoBookingVisibility(true))
    dispatch(setID(place.id));
  }

  return (
    <button
      key={place.id}
      style={{ color: `${place.color}` }}
      onClick={place.color === 'red' ? noBooking : booking}
      className={place.color === 'red' ? stylesListUsers.red : stylesListUsers.green}
    >{place.title}</button>
  )
}

export default ListUsers;