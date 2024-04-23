import { useResize } from '../util/use-resize';
import styleTable from './CSS/Table.module.css'


const Table = ({ title, items, tdRow, tdRowSmall }) => {
  const { widthWindow } = useResize()

  return (
    <div className={styleTable.div}>
      <h2 className={styleTable.h2}>{title}</h2>
      {/* <div className={styleTable.divTable}>
        <table className={styleTable.table}>
          <tbody >
            {
              items.map((item) => {
                let keys = Object.keys(item);
                return <tr key={item.id}>
                  Не забыть про подгрузку tooltip + понять как сделать
                  {
                    keys.map((key, index) => {
                      return <td key={index} onClick={() => console.log(window.innerWidth)}>{item[key]}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
      </div> */}
      <div className={styleTable.table}>
        {
          items.map((item) => {
            let keys = Object.keys(item);
            return <div key={item.id} className={styleTable.tr}>
              {
                keys.map((key, index) => {
                  return <div
                    key={index}
                    className={styleTable.td}
                    style={
                      {
                        width: widthWindow >= 700 ?
                          `${80 * tdRow[index] + (tdRow[index] - 1) * 30}px`
                          :
                          `${20 * tdRowSmall[index] + (tdRowSmall[index] - 1) * 8}px`
                      }
                    }
                    onClick={() => console.log(widthWindow)}>{item[key]}</div>
                })
              }
            </div>
          })
        }
      </div>
    </div >
  )
}

export default Table;