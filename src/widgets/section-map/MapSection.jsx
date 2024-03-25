// import Map from '../../entities/parking/ui/Map';
import Select from '../../shared/ui/Select'
import axios from "axios";

// import styleMainSection from './CSS/MapSection.module.css'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import fetchFloorsList from '../../entities/parking/api/fetchFloorsList';
import fetchParkingList from '../../entities/parking/api/fetchParkingList';

import { setFloors, setActiveFloor } from '../../entities/parking/model/floorsListSlice'

// import { apiGet } from "../../shared/server";
// import { setNeed } from "../../chlamochranilishe/restarting/restartingSlice";
// import { setPlaces } from './places/placesListSlice';
// import TablePlaces from './chlamochranilishe/containers/UI/TablePlaces';


const MapSection = () => {

  const floors = useSelector((store) => store.floorsList.floors)
  const activeFloor = useSelector((store) => store.floorsList.activeFloor)
  // const restarting = useSelector((state) => state.restart.isNeed)
  // const placesList = useSelector((state) => state.placesList.places)
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

    const responce = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth')

    if (floors.length === 0) {
      const listFloors = fetchFloorsList(responce.data[3])
      dispatch(setFloors(listFloors))
      dispatch(setActiveFloor(listFloors[0]))
    }

    const listPlaces = fetchParkingList(responce.data[3], activeFloor.split(' ')[1])
  }


  useEffect(() => { // запуск при загрузке страницы
    fetchData()
  }, [])


  // if (restarting === true) { // перезагрузка страницы
  //   dispatch(setNeed(false))
  //   fetchData()
  // }

  const onChangeSelect = (value) => {
    dispatch(setActiveFloor(value))
    fetchData()
  }

  //const floors = ['Этаж 1', 'Этаж 2']

  return (
    <main>
      <Select options={floors} onChange={onChangeSelect} />
      {/* {
        placesList.length === 0 ?
          <section className={styleMainSection.maps}>
            <p className={styleMainSection.pData}>Загрузка данных</p>
          </section>
          :
          <section className={styleMainSection.section}>
            {/* <Map floor={floorNumber} />
            <TablePlaces lots={placesList} /> 

          </section>
      } */}
    </main>
  )

}

export default MapSection;