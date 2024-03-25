import { Table } from '../../../shared/ui/Table'

const TablePlaces = ({ places }) => {
  return(
    <Table title='Карта парковки' items={places}/>
  )
}

export default TablePlaces;