import { useResize } from '../../../shared/util/use-resize'
import styleGraph from './GraphMap.module.css'

const mapData = [
  {
    "time": "08",
    "data": 0,
  },
  {
    "time": "09",
    "data": 30,
  },
  {
    "time": "10",
    "data": 50,
  },
  {
    "time": "11",
    "data": 50,
  },
  {
    "time": "12",
    "data": 60,
  },
  {
    "time": "13",
    "data": 90,
  },
  {
    "time": "14",
    "data": 100,
  },
  {
    "time": "15",
    "data": 100,
  },
  {
    "time": "16",
    "data": 100,
  },
  {
    "time": "17",
    "data": 100,
  },
  {
    "time": "18",
    "data": 70,
  },
  {
    "time": "19",
    "data": 20,
  },
  {
    "time": "20",
    "data": 0,
  },
]

const GraphMap = ({ map }) => {
  const { widthWindow } = useResize()

  return (
    <div className={styleGraph.container}>
      <div className={styleGraph.block}></div>
      <div className={styleGraph.block}></div>
      <div className={styleGraph.block}></div>
      <div className={styleGraph.block}></div>
      <div className={styleGraph.block}></div>
      <div className={styleGraph.blockBottom}></div>
      <div className={styleGraph.blockData}>
        {
          mapData.map((item, index) => {
            return <div key={item.time} style={{
              width: `calc(100% / ${mapData.length})`,
              borderRight: '1px solid transparent'
            }}>
              <div style={{
                height: widthWindow >= 700 ?
                  `min(calc(250px - ${item.data} * 2.5px), calc(100 * 0.2vw - ${item.data} * 0.2vw))`
                  :
                  `max(100px - calc(${item.data} * 1px), calc(100 * 0.3vw - ${item.data} * 0.3vw))`
                ,
              }}></div>
              <div style={{
                height: widthWindow >= 700 ?
                  `min(calc(${item.data} * 2.5px), calc(${item.data} * 0.2vw))`
                  :
                  `max(calc(${item.data} * 1px), calc(${item.data} * 0.3vw))`
                ,

                borderTopLeftRadius: widthWindow >= 700 ?
                  '10px'
                  :
                  '5px'
                ,

                borderTopRightRadius: widthWindow >= 700 ?
                  '10px'
                  :
                  '5px'
                ,

                backgroundColor: item.data <= 40 ?
                  '#4DC3F7'
                  :
                  item.data > 80 ?
                    '#FF8863'
                    :
                    '#FFD450'
              }}></div>
              {
                index % 3 === 1 ?
                  <>
                    <div className={styleGraph.timeLine}></div>
                    <div className={styleGraph.time}>{item.time}</div>
                  </>
                  :
                  <>
                    <div className={styleGraph.timeNullLine}></div>
                    <div className={styleGraph.timeNull}></div>
                  </>
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default GraphMap;