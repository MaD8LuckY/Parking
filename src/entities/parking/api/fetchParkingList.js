import { apiGet } from '../../../shared/server'


const fetchParkingList = (list, floorNumber) => {
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