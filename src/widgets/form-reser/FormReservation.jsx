import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import { setReservationVisibility } from "./reservation/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import styleFormBooking from './FormReservation.module.css'
//import { apiPost } from "../../service/server";
import { setNeed } from "../../chlamochranilishe/restarting/restartingSlice";
import { useState } from "react";

import axios from "axios";

const FormReservation = () => { // placeholder type
  const display = useSelector((store) => store.reservation.visibility)
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
      if (carNumber === '') {
        setErr('noData')
      }
      else {
        // await apiPost('/api/admin_book/', {
        //   "parkingLot": idPlace,
        //   "carNumber": carNumberVal,
        // })
        //   .then(res => {
        //     if (res.message === "Booking created successfully") {
        //       setErr('no')
        //       dispatch(setBookingVisibility(false))
        //       dispatch(setNeed(true))
        //     } else {
        //       setErr('errData')
        //     }
        //   })
        //   .catch(res => setErr('errSys'));
        const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
        //console.log(res.data[1]);
        if (res.data[1].message === "Booking created successfully") {
          setErr('no')
          setCarNumber('')
          dispatch(setReservationVisibility(false))
          dispatch(setNeed(true))
        }
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
              {err === 'errSys' ?
                <p style={{ color: '#f00', marginBottom: '5px' }}>Ошибка системы</p>
                :
                err === 'no' ?
                  <></>
                  :
                  <p style={{ color: '#f00', marginBottom: '5px' }}>Введите данные</p>
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