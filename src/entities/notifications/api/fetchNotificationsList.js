export default fetchNotificationsList = async (floorNumber) => {
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

  // const responce = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

  // let arrPlaces = [...responce.active_lots, ...responce.inactive_lots]

  // let listOfFloors = [...new Set(arrPlaces.map(item => {
  //   return item.floor
  // }))]

  // Получить список
  // Разделить на секции
  // Раскидать по Set'ам

  // return listOfFloors;
};