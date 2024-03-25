import map from '../model/iconCard.svg'
import anal from '../model/iconAnal.svg'

import styleNotiItem from './NotiItem.module.css'

const NotiItem = ({ noti }) => {
  return (
    <li className={styleNotiItem.li}>
      <div className={styleNotiItem.imgDiv}>
        <img src={
          noti.section === 'Карты' ?
            map
            :
            anal
        } alt="" />
        <div></div>
      </div>
      <div className={styleNotiItem.textDiv}>
        <h4>{noti.section}</h4>
        <p>{noti.text}</p>
      </div>
    </li>
  )
}
export default NotiItem;