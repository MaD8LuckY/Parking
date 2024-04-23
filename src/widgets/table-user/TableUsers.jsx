import GraphUser from "../../entities/users/ui/GraphUser"
import Table from "../../shared/ui/Table"

const users = [
  {
    "name": 'Пушкарев Константин',
    "carNumber": "az123a",
    "late": 40
  },
  {
    "name": 'Иванов Иван',
    "carNumber": "az123a",
    "late": 70
  }
]

const sortUser = (arr) => {
  return arr.sort((a, b) => a["late"] < b["late"] ? 1 : -1)
}

const addGraph = (arr) => {
  return arr.map(item =>  {
    return {...item, late: <GraphUser data={item.late}/>}
  })
}

const tdRow = [3, 2, 1]
const tdRowSmall = [7, 3, 2]

const TableUsers = () => {

  return (
    <Table title='Учет пользователей' items={addGraph(sortUser(users))} tdRow={tdRow} tdRowSmall={tdRowSmall}/>
  )
}

export default TableUsers;