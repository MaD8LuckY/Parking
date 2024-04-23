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

const tdRow = [1, 2, 1, 1, 1]
const tdRowSmall = [1, 6, 2, 2, 1]

const TablePlaces = () => {
  const places = useSelector((store) => store.placesList.places)

  return (
    <Table title='Список мест' items={deleteKeys(places)} tdRow={tdRow} tdRowSmall={tdRowSmall}/>
  )
}

export default TablePlaces;