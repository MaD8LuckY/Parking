import Map from '../containers/Map';
import { useEffect, useState } from 'react';
import styleMainSection from './MainSection.module.css'
import { apiGet } from "../service/server";
import Button from './UI/Button';
import { useSelector, useDispatch } from "react-redux";
import { setNeed } from "../features/restarting/restartingSlice";
import CreaterList from './CreaterList';

const MainSection = () => {

  const [places, setPlace] = useState([])
  const [floors, setFloors] = useState([])
  const restarting = useSelector((state) => state.restart.isNeed)
  const dispatch = useDispatch()

  const fetchData = async () => {
    await apiGet('/api/get_lots/')
      .then(res => {

        const greenLots = res.active_lots.map(item => { // список свободных мест
          return {
            'id': item.id,
            'title': `${item.id} - ${item.secondName} ${item.firstName} - ${item.carNumber} - ${item.startTime.split(' ')[1].substr(0, 5)}`,
            'color': 'red',
            'floor': item.floor
          }
        })
        const redLots = res.inactive_lots.map(item => { // список занятых мест
          return {
            'id': item.id,
            'title': `${item.id} - Cвободно`,
            'color': 'green',
            'floor': item.floor
          }
        })

        const listOfLots = [...new Set([...greenLots, ...redLots])].sort(function (a, b) { // сортировка
          return a.id - b.id;
        });
        setPlace(listOfLots);

        setFloors([...new Set(listOfLots.map(item => {
          return item.floor
        }))])

      })
      .catch(err => console.log('lots err', err));
  }


  useEffect(() => { // запуск при загрузке страницы
    fetchData()
  }, [])

  if (restarting === true) { // перезагрузка страницы
    dispatch(setNeed(false))
    fetchData()
  }

  return (
    <main className={styleMainSection.main}>
      <section className={styleMainSection.maps}>
      {
        floors.map(floor => {
          const lots = places.filter(place => {
            if(place.floor === floor){
              return place
            }
          });

          return <div key={floor} className={styleMainSection.mapsCard}>
            <Map floor={floor} lots={lots}/>
            <CreaterList places={lots} />
          </div>
        })
      }
      </section>
      <Button text="Обновить" />
    </main>
  )

}

export default MainSection;