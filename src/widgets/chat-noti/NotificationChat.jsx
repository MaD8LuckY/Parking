import styleNoti from './NotificationChat.module.css';
import { useState, useRef } from "react";
import close from "../../shared/images/buttonClose.svg";
import letter from "../../shared/images/buttonLetter.svg";
import NotiItem from '../../entities/notifications/ui/NotiItem';

const notif = [
  {
    'id': 1,
    'section': 'Карты',
    'text': 'Освободить место 23'
  },
  {
    'id': 2,
    'section': 'Аналитика',
    'text': 'Обновление отчета'
  }
]

const NotificationChat = () => {
  const [open, setOpen] = useState(false);

  const notiRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== notiRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  })

  return (
    <div className={styleNoti.notification}>
      <div className={styleNoti.divPosition}>
        <img
          ref={imgRef}
          src={
            open === false ?
              letter
              :
              close
          }
          alt=""
          onClick={() => setOpen(!open)}
          className={styleNoti.img}
        />
        {
          notif.length !== 0 ?
            <div className={styleNoti.col}>{notif.length}</div>
            :
            <></>
        }
        {
          open && <div className={styleNoti.ul} ref={notiRef}>
            <h3 className={styleNoti.h3}>Уведомления</h3>
            <ul>
              {
                notif.map((item) => {
                  return <NotiItem noti={item} key={item.id}/>
                })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default NotificationChat;