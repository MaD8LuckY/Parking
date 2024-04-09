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