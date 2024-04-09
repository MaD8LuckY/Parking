import axios from "axios";

import { apiGet } from '../../../server'

const fetchFloorsList = async () => {

  const resp = await apiGet('/api/get_lots')

  const responce = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth')

  let res = responce.data[3]

  let arrPlaces = [...res.active_lots, ...res.inactive_lots]

  let listOfFloors = [...new Set(arrPlaces.map(item => {
    return `Этаж ${item.floor}`
  }))]

  return listOfFloors
};

export default fetchFloorsList;