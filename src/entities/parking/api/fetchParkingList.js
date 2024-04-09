import axios from "axios";

const fetchParkingList = async (floorNumber) => {

  const responce = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth')

  const res = responce.data[3];
  
  let redPlaces = res.active_lots.filter((item) =>
    (item.floor === Number(floorNumber.split(' ')[1]))
  )

  let greenPlaces = res.inactive_lots.filter(item =>
    (item.floor === Number(floorNumber.split(' ')[1]))
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