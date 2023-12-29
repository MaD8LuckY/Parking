import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { setNoBookingVisibility } from "../../features/noBooking/noBookingSlice";
import closeImg from '../../images/close.svg';
import { useDispatch } from "react-redux";
import styleFormNoBooking from './FormNoBooking.module.css'
import { setNeed } from "../../features/restarting/restartingSlice";
import { apiPost } from "../../service/server";

const FormNoBooking = () => {
  const display = useSelector((state) => state.noBooking.visibility)
  const idPlace = useSelector((state) => state.item.id)
  const dispatch = useDispatch()
  

  const entrance = async (e) => { // api
    e.preventDefault()
    
    const noBooking = async () => {
      await apiPost('/api/end_booking/', {
        "parkingLot": idPlace,
      }
      ).then(res => {
          if(res.message === "Booking ended successfully"){
            dispatch(setNoBookingVisibility(false))
            dispatch(setNeed(true))
            } else {
              alert('Ошибка')
            }
        }
      ).catch(err => console.log('createBooking err', err));
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
          <img src={closeImg} alt='' onClick={closeNoBooking} className={styleFormNoBooking.close}/>

          <form onSubmit={entrance} className={styleFormNoBooking.form}>
            <h2 className={styleFormNoBooking.title}>Освободить место</h2>
            
            <div className={styleFormNoBooking.buttons}>
              <Button text='Да' onClick={entrance} />
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