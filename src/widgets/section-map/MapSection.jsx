import Select from '../../shared/ui/Select'
import Map from '../../entities/parking/ui/Map';
import TablePlaces from '../../entities/parking/ui/TablePlaces';

import styleMapSection from './MapSection.module.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import fetchFloorsList from '../../entities/parking/api/fetchFloorsList';
import fetchParkingList from '../../entities/parking/api/fetchParkingList';

import { setActiveFloor } from '../../entities/parking/model/floorsListSlice'
import { setPlaces } from '../../entities/parking/model/placesListSlice'


const MapSection = () => {

  const floors = useSelector((store) => store.floorsList.floors)
  const activeFloor = useSelector((store) => store.floorsList.activeFloor)
  const places = useSelector((store) => store.placesList.places)
  const token = useSelector((store) => store.admin.token)
  // const restarting = useSelector((state) => state.restart.isNeed)
  const dispatch = useDispatch()

  const fetchData = async () => {
    dispatch(setPlaces([]))

    if (typeof activeFloor === 'string' && activeFloor.length !== 0) {
      const listPlaces = await fetchParkingList(activeFloor, token);
      dispatch(setPlaces(listPlaces))
    }
  }


  useEffect(() => { // запуск при загрузке страницы
    dispatch(setPlaces([]))
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFloor])


  const onChangeSelect = (value) => {
    if (value !== activeFloor) {
      dispatch(setPlaces([]))
    }
    dispatch(setActiveFloor(value))
  }

  return (
    <section>
      <Select options={floors} activeFloor={activeFloor} onChange={onChangeSelect} />
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