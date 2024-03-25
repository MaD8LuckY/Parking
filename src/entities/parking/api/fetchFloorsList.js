const fetchFloorsList = ( list ) => {
  console.log(list)
  let arrPlaces = [...list.active_lots, ...list.inactive_lots]

  let listOfFloors = [...new Set(arrPlaces.map(item => {
    return `Этаж ${item.floor}`
  }))]

  return listOfFloors
};

export default fetchFloorsList;