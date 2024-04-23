import styleR from './Report.module.css'

const Report = ({ item }) => {
  return (
    <div className={styleR.card}>
      <p className={styleR.text}>{item.title}</p>
      <p onClick={item.link} className={styleR.link}>Скачать</p>
    </div>
  )
}

export default Report;