import styleGU from './GraphUser.module.css'

const userFailData = 
  {
    "data": 30
  }


const GraphUser = () => {
  return (
    <div className={styleGU.container}>
      <div className={styleGU.base} style={{
        background: `conic-gradient(#FF8863 ${userFailData.data}%, #4DC3F7 ${userFailData.data}%)`
      }}></div>
      <div className={styleGU.white}></div>
    </div>
  )
}

export default GraphUser;