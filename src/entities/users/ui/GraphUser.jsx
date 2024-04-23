import styleGU from './GraphUser.module.css'

const GraphUser = ({data}) => {
  return (
    <div className={styleGU.container}>
      <div className={styleGU.base} style={{
        background: `conic-gradient(#FF8863 ${data}%, #4DC3F7 ${data}%)`
      }}></div>
      <div className={styleGU.white}></div>
    </div>
  )
}

export default GraphUser;