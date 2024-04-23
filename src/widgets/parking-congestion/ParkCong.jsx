import { useEffect, useState } from "react";
import GraphMap from "../../entities/parking/ui/GraphMap";
import Select from "../../shared/ui/Select";

import stylePC from './ParkCong.module.css'

const selectData = ["Вчера", "Прошлая неделя", "Прошлый месяц", "Прошлый год", "Период"]

const ParkCong = () => {
  const [period, setPeriod] = useState("Вчера")
  // Slice наверно делать не надо все равно только он им пользуется
  // Обойтись только useState

  // const fetchData = () => {
  //   console.log(period)
  //   // api-запрос на данные
  // }

  useEffect(() => {
    //fetchData()
  }, [period])

  const onChangeSelect = (value) => {
    setPeriod(value)
  }

  return (
    <div className={stylePC.container}>
      <h2 className={stylePC.h2}>Загруженность парковки</h2>
      <Select options={selectData} onChange={onChangeSelect} active={period}/>
      {/* Отправлять данные GraphMap'у */}
      <GraphMap/>
    </div>
  )

}

export default ParkCong;