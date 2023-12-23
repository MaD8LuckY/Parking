import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import closeImg from '../../images/close.svg';
import { setBookingVisibility } from "../../features/booking/bookingSlice";
import { useDispatch } from "react-redux";
import styleFormBooking from './FormBooking.module.css'

const FormBooking = () => { // placeholder type
  const display = useSelector((state) => state.booking.visibility)
  const dispatch = useDispatch()

  const booking = () => {
    dispatch(setBookingVisibility(false))
  }

  return (
    <>
      {display === true ?
        <div className={styleFormBooking.background}>
          <img src={closeImg} alt='' onClick={booking} className={styleFormBooking.close}/>
          <div className={styleFormBooking.form} >
            <h2 className={styleFormBooking.title}>Занять место</h2>
            <form action="" className={styleFormBooking.formAction}>
              <Input type="text" name="Номер автомобиля" />
              <Button text='>' />
            </form>
          </div>
        </div>
        :
        <></>
      }
    </>
  )
}

export default FormBooking;