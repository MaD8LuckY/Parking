import styleTable from './CSS/Table.module.css'


const Table = ({ title, items }) => {
  return (
    <div className={styleTable.div}>
      <p className={styleTable.p}>{title}</p>
      <div className={styleTable.divTable}>
        <table className={styleTable.table}>
          <tbody >
            {
              items.map((item) => {
                // if (item.active === 'active')
                //   return <tr key={item.id}>
                //     <td >{item.id}</td>
                //     <td >{item.name}</td>
                //     <td >{item.carNumber}</td>
                //     <td >{item.time}</td>
                //     <td ><Tooltip data='Место 8 на парковке занято a123az, а в приложении свободно' /></td>
                //   </tr>
                // else {
                //   return <tr key={item.id} >
                //     <td >{item.id}</td>
                //     <td >{item.name}</td>
                //     <td ></td>
                //     <td ></td>
                //     <td ></td>
                //   </tr>
                // }
                let keys = item.keys();
                return <tr key={item.id}>
                  {/* Не забыть про подгрузку tooltip + понять как сделать */}
                  {
                    
                    keys.map(key => {
                      return <td>{item[key]}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;