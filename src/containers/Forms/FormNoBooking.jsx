import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { setNoBookingVisibility } from "../../features/noBooking/noBookingSlice";
import { useDispatch } from "react-redux";
import styleFormNoBooking from './FormNoBooking.module.css'
import { EndBookingService } from "../../service/EndBooking.service";

const FormNoBooking = () => {
  const display = useSelector((state) => state.noBooking.visibility)
  const dispatch = useDispatch()

  const endBooking = async () => {
    const responceEndbooking = await EndBookingService.getAll()

    if(responceEndbooking === ""){
      
    }
  }

  const closeNoBooking = (e) => {
    e.preventDefault()
    dispatch(setNoBookingVisibility(false))
  }

  return (
    <>
      {display === true ?
        <div className={styleFormNoBooking.background}>
          <form action="" className={styleFormNoBooking.form}>
            <h2 className={styleFormNoBooking.title}>Освободить место</h2>
            <div className={styleFormNoBooking.buttons}>
              <Button text='Да' onSubmit={endBooking} />
              <Button text='Нет' onSubmit={closeNoBooking} />
            </div>
          </form>
        </div>
        :
        <></>
      }
    </>
  )
}

export default FormNoBooking;