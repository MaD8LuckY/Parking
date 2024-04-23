import Report from "../../entities/reports/ui/Report"

import styleRB from './ReportBlock.module.css'

const data = [
  {
    "title": "Учет_пользователей_на_январь_2024.xlsx",
    "link": () => {
      console.log('январь')
    }
  },
  {
    "title": "Учет_пользователей_на_февраль_2024.xlsx",
    "link": () => {
      console.log('февраль')
    }
  }
]

const ReportBlock = () => {
  return (
    <div className={styleRB.container}>
      <h2 className={styleRB.h2}>Отчеты за месяц</h2>
      <div className={styleRB.block}>
        {
          data.map((item, index) => {
            return <Report item={item} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default ReportBlock;