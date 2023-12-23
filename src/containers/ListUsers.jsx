import { useDispatch } from "react-redux"
import { setNoBookingVisibility } from "../features/noBooking/noBookingSlice"
import styleButtonList from './ListUsers.module.css';
import { setBookingVisibility } from '../features/booking/bookingSlice'


const ListUsers = (props) => {
  const dispatch = useDispatch()


  const booking = () => {
    dispatch(setBookingVisibility(true))
  }

  const noBooking = () => {
    dispatch(setNoBookingVisibility(true))
  }



  return (
    <>
      <button
        key={props.id}
        style={{ color: `${props.place.color}` }}
        onClick={props.place.color === 'red' ? noBooking : booking}
        className={props.place.color === 'red' ? styleButtonList.red : styleButtonList.green}
      >{props.place.title}</button>
    </>
  )
}

export default ListUsers;