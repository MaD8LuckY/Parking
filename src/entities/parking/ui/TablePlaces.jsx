import Table from '../../../shared/ui/Table'
import { useSelector } from 'react-redux'

const deleteKeys = (list) => {
  let arr = []

  for (let object of list) {
    let { floor, active, ...rest } = object
    arr.push(rest);
  }

  return arr;
}

const TablePlaces = () => {
  const places = useSelector((store) => store.placesList.places)

  return (
    <Table title='Список мест' items={deleteKeys(places)} />
  )
}

export default TablePlaces;