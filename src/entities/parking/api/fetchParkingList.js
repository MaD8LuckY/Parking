// import axios from "axios";

import { apiPostToken } from "../../../server";

const fetchParkingList = async (floorNumber, token) => {

  const res = await apiPostToken('/api/get_lots/', {
    "floor": Number(floorNumber.split(' ')[1])
  }, token)

  const listOfPlaces = [...new Set([...res.active_lots, ...res.inactive_lots])].map(item => {
    if (item.status === 0) {
      return {
        'id': item.parking_lot_number,
        'active': 'inactive',
        'floor': item.floor,
        'name': `Cвободно`,
        'carNumber': '',
        'time': '',
        'notification': ''
      }
    }
    else {
      return {
        'id': item.parking_lot_number,
        'active': 'active',
        'floor': item.floor,
        'name': `${item.secondName} ${item.firstName}`,
        'carNumber': item.carNumber,
        'time': item.started.split(' ')[1].substr(0, 5),
        'notification': ''
      }
    }
  })
  return listOfPlaces.sort((a, b) => a.id > b.id ? 1 : -1);;
};

export default fetchParkingList;