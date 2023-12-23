import styleMap from './Map.module.css'

const Map = (props) => {
    return(
      <img src={props.floor} alt='map' className={styleMap.map}/>
    )
}

export default Map;