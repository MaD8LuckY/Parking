import Input from "../UI/Input";
import Button from "../UI/Button";
import closeImg from '../../images/close.svg';
import { setBookingVisibility } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";
import styleFormBooking from './FormBooking.module.css'
import { apiPost } from "../../service/server";
import { setCarNumber } from "../../features/item/itemSlice";
import { setNeed } from "../../features/restarting/restartingSlice";
import { useState } from "react";

const FormBooking = () => { // placeholder type
  const display = useSelector((state) => state.booking.visibility)
  const dispatch = useDispatch()
  const idPlace = useSelector((state) => state.item.id)
  const carNumberVal = useSelector((state) => state.item.carNumber)
  const [err, setErr] = useState('no')

  const bookingClose = () => { // закрытие формы
    dispatch(setBookingVisibility(false))
    dispatch(setCarNumber(''))
  }

  const entrance = (e) => { // api
    e.preventDefault()

    const booking = async () => {
      await apiPost('/api/admin_book/', {
        "parkingLot": idPlace,
        "carNumber": carNumberVal,
      })
        .then(res => {
          if (res.message === "Booking created successfully") {
            setErr('no')
            dispatch(setBookingVisibility(false))
            dispatch(setNeed(true))
          } else {
            setErr('errData')
          }
        })
        .catch(res => setErr('errSys'));
    };

    booking()
  }

  return (
    <>
      {display === true ?
        <div className={styleFormBooking.background}>
          <img src={closeImg} alt='' onClick={bookingClose} className={styleFormBooking.close} />

          <div className={styleFormBooking.form} >
            <h2 className={styleFormBooking.title}>Занять место</h2>
            {err === 'errSys' ?
                <p style={{ color: '#f00', marginBottom: '5px' }}>Ошибка системы</p>
                :
                err === 'no' ?
                  <></>
                  :
                  <p style={{ color: '#f00', marginBottom: '5px' }}>Введены неверные данные</p>
              }

            <form onSubmit={entrance} className={styleFormBooking.formAction}>
              <Input type="text" name="Номер автомобиля" id='carNumber' />
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