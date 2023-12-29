import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import stylesCreaterList from './CreaterList.module.css';
import { apiGet } from "../service/server";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNeed } from "../features/restarting/restartingSlice";

const CreaterList = (props) => {

  const [places, setPlace] = useState([])
  const restarting = useSelector((state) => state.restart.isNeed)
  const dispatch = useDispatch()

  const fetchData = async () => {
    const responce = await apiGet('/api/get_lots/')
      .then(res => {

        const greenLots = res.active_lots.map(item => { // список свободных мест
          return {
            'id': item.id,
            'title': `${item.id} - ${item.secondName} ${item.firstName} - ${item.carNumber} - ${item.startTime.split(' ')[1].substr(0, 5)}`,
            'color': 'red'
          }
        })
        const redLots = res.inactive_lots.map(item => { // список занятых мест
          return {
            'id': item.id,
            'title': `${item.id} - Cвободно`,
            'color': 'green'
          }
        })
    
        const listOfLots = [...new Set([...greenLots, ...redLots])].sort(function (a, b) { // сортировка
          return a.id - b.id;
        });
        setPlace(listOfLots)
      })
      .catch(err => console.log('lots err', err));

    
  }

  useEffect(() => { // запуск при загрузке страницы
    fetchData()
  }, [])

  if(restarting === true) { // перезагрузка страницы
    dispatch(setNeed(false))
    console.log(restarting)
    fetchData()
  }

  return (
    <div className={stylesCreaterList.list}>

      {places.map(place => (
        <ListUsers key={place.id} place={place} />
      ))}

      <button className={stylesCreaterList.update} onClick={fetchData}>Обновить </button>
    </div>

  )

}

export default CreaterList;
// 