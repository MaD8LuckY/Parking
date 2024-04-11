import Button from "../../shared/ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCancelReservationVisibility } from "./cancelReservation/cancelReservationSlice";
import styleFormNoBooking from './FormCancelReservation.module.css'
import { setNeed } from "../../entities/parking/model/restartingSlice";

import cancelReservation from "../../features/cancel-reservation/cancelReservation";

const FormCancelReservation = () => {
  const display = useSelector((store) => store.cancelReservation.visibility)
  const id = useSelector((store) => store.id.id)
  const token = useSelector((store) => store.admin.token)

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

      const res = await cancelReservation(id, token);
      console.log(res);
      if (res.message === "Booking ended successfully") {
        dispatch(setCancelReservationVisibility(false))
        dispatch(setNeed(true))
      }
      // const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
        //console.log(res.data[1]);
        // if (res.data[2].message === "Booking ended successfully") {
        //   dispatch(setCancelReservationVisibility(false))
        //   //dispatch(setNeed(true))
        // }
    };

    noBooking()
  }

  const closeNoBooking = () => { // закрытие ормы
    dispatch(setCancelReservationVisibility(false))
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

export default FormCancelReservation;