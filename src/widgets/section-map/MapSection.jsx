import Select from '../../shared/ui/Select'
import axios from "axios";

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import fetchFloorsList from '../../entities/parking/api/fetchFloorsList';
import fetchParkingList from '../../entities/parking/api/fetchParkingList';

import { setFloors, setActiveFloor } from '../../entities/parking/model/floorsListSlice'


const MapSection = () => {

  const floors = useSelector((store) => store.floorsList.floors)
  const activeFloor = useSelector((store) => store.floorsList.activeFloor)
  // const restarting = useSelector((state) => state.restart.isNeed)
  // const placesList = useSelector((state) => state.placesList.places)
  const dispatch = useDispatch()

  const fetchData = async () => {

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


  const onChangeSelect = (value) => {
    dispatch(setActiveFloor(value))
    fetchData()
  }

  return (
    <main>
      <Select options={floors} onChange={onChangeSelect} />
    </main>
  )

}

export default MapSection;