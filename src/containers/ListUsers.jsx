import { useDispatch } from "react-redux"
import { setNoBookingVisibility } from "../features/noBooking/noBookingSlice"
import styleButtonList from './ListUsers.module.css';
import { setBookingVisibility } from '../features/booking/bookingSlice'
import { setID } from "../features/item/itemSlice";


const ListUsers = (props) => {
  const dispatch = useDispatch()


  const booking = () => { // форма "Занять место"
    dispatch(setBookingVisibility(true))
    dispatch(setID(props.place.id));
  }

  const noBooking = () => { // форма "Освободить место"
    dispatch(setNoBookingVisibility(true))
    dispatch(setID(props.place.id));
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