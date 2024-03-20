import styleNoti from './CSS/Notification.module.css';
import { useState, useRef } from "react";
import close from "../../images/ButtonClose.svg";
import letter from "../../images/ButtonLetter.svg";
import map from "../../images/iconCard.svg";
import anal from "../../images/iconAnal.svg";

const Notification = () => {
  const [open, setOpen] = useState(false);

  const notiRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== notiRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  })

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
                  return <li key={item.id} className={styleNoti.li}>
                    <div className={styleNoti.imgDiv}>
                    <img src={
                        item.section === 'Карты' ?
                          map
                          :
                          anal
                      } alt="" />
                      <div></div>
                    </div>
                    <div className={styleNoti.textDiv}>
                      <h4>{item.section}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Notification;