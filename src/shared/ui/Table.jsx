import styleTable from './CSS/Table.module.css'


const Table = ({ title, items }) => {
  return (
    <div className={styleTable.div}>
      <h2 className={styleTable.h2}>{title}</h2>
      <div className={styleTable.divTable}>
        <table className={styleTable.table}>
          <tbody >
            {
              items.map((item) => {
                let keys = Object.keys(item);
                return <tr key={item.id}>
                  {/* Не забыть про подгрузку tooltip + понять как сделать */}
                  {
                    keys.map((key, index) => {
                      return <td key={index}>{item[key]}</td>
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