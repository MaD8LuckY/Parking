import styleTable from './CSS/TablePlaces.module.css'

import Tooltip from './Tooltip'


const TablePlaces = ({ lots }) => {
  return (
    <div className={styleTable.div}>
      <p className={styleTable.p}>Список мест</p>
      <div className={styleTable.divTable}>
        <table className={styleTable.table}>
          <tbody >
            {
              lots.map((item) => {
                if (item.active === 'active')
                  return <tr key={item.id}>
                    <td >{item.id}</td>
                    <td >{item.name}</td>
                    <td >{item.carNumber}</td>
                    <td >{item.time}</td>
                    <td ></td>
                  </tr>
                else {
                  return <tr key={item.id} >
                    <td >{item.id}</td>
                    <td >{item.name}</td>
                    <td ></td>
                    <td ></td>
                    <td ><Tooltip data='Место 8 на парковке занято a123az, а в приложении свободно'/></td>
                  </tr>
                }
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePlaces;