import Map from '../UI/Map';
import Select from '../UI/Select'
import Notification from '../UI/Notification';

import styleMainSection from './CSS/MapSection.module.css'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { apiGet } from "../../service/server";
import { setNeed } from "../../features/restarting/restartingSlice";
import axios from 'axios';
import TablePlaces from '../UI/TablePlaces';


const MapSection = () => {

  const [places, setPlace] = useState([])
  //const [floors, setFloors] = useState([]) 
  const [floorNumber, setFloorNumber] = useState(1)
  const restarting = useSelector((state) => state.restart.isNeed)
  const dispatch = useDispatch()

  const fetchData = async () => {
    // await apiGet('/api/get_lots/')
    //   .then(res => {

    //     const greenLots = res.active_lots.map(item => { // список свободных мест
    //       return {
    //         'id': item.id,
    //         'title': `${item.id} - ${item.secondName} ${item.firstName} - ${item.carNumber} - ${item.startTime.split(' ')[1].substr(0, 5)}`,
    //         'color': 'red',
    //         'floor': item.floor
    //       }
    //     })
    //     const redLots = res.inactive_lots.map(item => { // список занятых мест
    //       return {
    //         'id': item.id,
    //         'title': `${item.id} - Cвободно`,
    //         'color': 'green',
    //         'floor': item.floor
    //       }
    //     })

    //     const listOfLots = [...new Set([...greenLots, ...redLots])].sort(function (a, b) { // сортировка
    //       return a.id - b.id;
    //     });
    //     setPlace(listOfLots);

    //     setFloors([...new Set(listOfLots.map(item => {
    //       return item.floor
    //     }))])

    //   })
    //   .catch(err => console.log('lots err', err));

    await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth').then(res => {
      // setFloors([...new Set(res.data[2].map(item => {
      //   return item.floor
      // }))])

      let redLots = res.data[3].active_lots.filter((item) =>
        (item.floor === floorNumber)
      )

      let greenLots = res.data[3].inactive_lots.filter(item => // список занятых мест
        item.floor === floorNumber
      )

      const listOfLotsSort = [...new Set([...greenLots, ...redLots])].sort(function (a, b) { // сортировка
        return a.id - b.id;
      });

      const listOfLots = listOfLotsSort.map(item => {
        if (item.status === 0) {
          return {
            'id': item.id,
            'name': `Cвободно`,
            'active': 'inactive',
            'floor': item.floor
          }
        }
        else {
          return {
            'id': item.id,
            'name': `${item.secondName} ${item.firstName}`,
            'carNumber': item.carNumber,
            'time': item.startTime.split(' ')[1].substr(0, 5),
            'active': 'active',
            'floor': item.floor
          }
        }
      })

      setPlace(listOfLots);
    });
  }


  useEffect(() => { // запуск при загрузке страницы
    fetchData()
  }, [floorNumber])


  if (restarting === true) { // перезагрузка страницы
    dispatch(setNeed(false))
    fetchData()
  }

  const onChangeSelect = (value) => {
    if (floorNumber !== value) {
      setPlace([])
    }
    setFloorNumber(value);
  }

  const floors = ['Этаж 1', 'Этаж 2']

  return (
    <main className={styleMainSection.main}>
      <Select options={floors} onChange={onChangeSelect} />
      {
        places.length === 0 ?
          <section className={styleMainSection.maps}>
            <p className={styleMainSection.pData}>Загрузка данных</p>
          </section>
          :
          <section className={styleMainSection.section}>
            <Map floor={floorNumber} lots={places} />
            <TablePlaces lots={places} />

          </section>
      }
      <Notification />
    </main>
  )

}

export default MapSection;