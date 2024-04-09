import { apiGet } from '../../../shared/server'


const fetchParkingList = (list, floorNumber) => {
  
  let redPlaces = list.active_lots.filter((item) =>
    (item.floor === floorNumber)
  )

  let greenPlaces = list.inactive_lots.filter(item =>
    (item.floor === floorNumber)
  )

  const listOfPlacesSort = [...new Set([...greenPlaces, ...redPlaces])].sort(function (a, b) { // сортировка
    return a.id - b.id;
  });

  const listOfPlaces = listOfPlacesSort.map(item => {
    if (item.status === 0) {
      return {
        'id': item.id,
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
        'id': item.id,
        'active': 'active',
        'floor': item.floor,
        'name': `${item.secondName} ${item.firstName}`,
        'carNumber': item.carNumber,
        'time': item.startTime.split(' ')[1].substr(0, 5),
        'notification': ''
      }
    }
  })

  return listOfPlaces;
};

export default fetchParkingList;