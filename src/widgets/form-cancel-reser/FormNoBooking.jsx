import Button from "../shared/ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { setNoBookingVisibility } from "../../features/noBooking/noBookingSlice";
import styleFormNoBooking from './FormNoBooking.module.css'
import { setNeed } from "../../features/restarting/restartingSlice";
import { apiPost } from "../../service/server";

import axios from "axios";

const FormNoBooking = () => {
  const display = useSelector((state) => state.noBooking.visibility)
  const dispatch = useDispatch()


  const entrance = async (e) => { // api
    e.preventDefault()

    const noBooking = async () => {
      // await apiPost('/api/end_booking/', {
      //   "parkingLot": idPlace,
      // }
      // ).then(res => {
      //   if (res.message === "Booking ended successfully") {
      //     dispatch(setNoBookingVisibility(false))
      //     dispatch(setNeed(true))
      //   } else {
      //     alert('Ошибка')
      //   }
      // }
      // ).catch(err => console.log('createBooking err', err));
      const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
        //console.log(res.data[1]);
        if (res.data[2].message === "Booking ended successfully") {
          dispatch(setNoBookingVisibility(false))
          dispatch(setNeed(true))
        }
    };

    noBooking()
  }

  const closeNoBooking = (e) => { // закрытие ормы
    e.preventDefault()
    dispatch(setNoBookingVisibility(false))
  }

  return (
    <>
      {display === true ?
        <div className={styleFormNoBooking.background}>

          <form onSubmit={entrance} className={styleFormNoBooking.form}>
            <h2 className={styleFormNoBooking.title}>Освободить место</h2>

            <div className={styleFormNoBooking.buttons}>
              <Button text='Отмена' onClick={closeNoBooking} />
              <Button text='Отправить' onClick={entrance} />
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