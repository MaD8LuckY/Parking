import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import { setReservationVisibility } from "./reservation/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import styleFormBooking from './FormReservation.module.css'
import { setNeed } from "../../entities/parking/model/restartingSlice";
import { useState } from "react";

import { errorTypes } from '../../shared/constants/errorTypes';

import reservation from "../../features/reservation/reservation";

const FormReservation = () => { // placeholder type
  const display = useSelector((store) => store.reservation.visibility)
  const id = useSelector((store) => store.id.id)
  const token = useSelector((store) => store.admin.token)

  const dispatch = useDispatch()

  const [err, setErr] = useState('no')
  const [carNumber, setCarNumber] = useState('')


  const bookingClose = () => { // закрытие формы
    dispatch(setReservationVisibility(false))
    setCarNumber('')
  }

  const onChangeInput = (e) => {
    setCarNumber(e.target.value)
  }

  const entrance = (e) => { // api
    e.preventDefault()

    const booking = async () => {
      // if (carNumber === '') {
      //   setErr('errNoData')
      // }

      const res = await reservation(id, token);
      console.log(res);
      if (res.message === "Booking created successfully") {
        setErr('no')
        setCarNumber('')
        dispatch(setReservationVisibility(false))
        dispatch(setNeed(true))
      }
    };

    booking();
  }

  return (
    <>
      {display === true ?
        <div className={styleFormBooking.background}>

          <div className={styleFormBooking.form} >
            <h2 className={styleFormBooking.title}>Занять место</h2>
            <form onSubmit={entrance}>
              <Input id='carNumber' onChange={onChangeInput} type='text' value={carNumber} name="Номер автомобиля" />
              {err === 'no' ?
                <></>
                :
                <p className={styleFormBooking.err}>{errorTypes[err]}</p>
              }
              <div className={styleFormBooking.buttons}>
                <Button text='Отмена' onClick={bookingClose} />
                <Button text='Отправить' onClick={entrance} />
              </div>
            </form>
          </div>

        </div>
        :
        <></>
      }
    </>
  )
}

export default FormReservation;