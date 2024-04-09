import Select from '../../shared/ui/Select'
import Map from '../../entities/parking/ui/Map';
import TablePlaces from '../../entities/parking/ui/TablePlaces';

import styleMapSection from './MapSection.module.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import fetchFloorsList from '../../entities/parking/api/fetchFloorsList';
import fetchParkingList from '../../entities/parking/api/fetchParkingList';

import { setFloors, setActiveFloor } from '../../entities/parking/model/floorsListSlice'
import { setPlaces } from '../../entities/parking/model/placesListSlice'


const MapSection = () => {

  const floors = useSelector((store) => store.floorsList.floors)
  const activeFloor = useSelector((store) => store.floorsList.activeFloor)
  const places = useSelector((store) => store.placesList.places)
  // const restarting = useSelector((state) => state.restart.isNeed)
  const dispatch = useDispatch()

  const fetchData = async () => {
    dispatch(setPlaces([]))

    if (floors.length === 0) {
      const listFloors = await fetchFloorsList()
      //console.log(listFloors)
      dispatch(setFloors(listFloors))
      dispatch(setActiveFloor(listFloors[0]))
    }

    if (typeof activeFloor === 'string' && activeFloor.length !== 0) {
      const listPlaces = await fetchParkingList(activeFloor);
      dispatch(setPlaces(listPlaces))
    }

    console.log('useEffect', floors, activeFloor)
  }


  useEffect(() => { // запуск при загрузке страницы
    dispatch(setPlaces([]))
    fetchData()
  }, [activeFloor])


  const onChangeSelect = (value) => {
    if (value !== activeFloor) {
      dispatch(setPlaces([]))
    }
    dispatch(setActiveFloor(value))
  }

  return (
    <section>
      <Select options={floors} onChange={onChangeSelect} />
      {
        places.length === 0 && typeof activeFloor === 'string' ?
          <p>Загрузка данных</p>
          :
          <div className={styleMapSection.section}>
            <Map />
            <TablePlaces />
          </div>
      }
    </section>
  )

}

export default MapSection;