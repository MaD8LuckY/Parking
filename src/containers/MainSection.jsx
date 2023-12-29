import Map from '../containers/Map';
import mapFloor1 from '../images/map1.svg'
import mapFloor2 from '../images/map2.svg'
import CreaterList from "./CreaterList";
import styleMainSection from './MainSection.module.css'

const MainSection = () => {
    return(
      <main className={styleMainSection.main}>
        <div className={styleMainSection.mapDiv}>
        <Map floor={mapFloor1}/>
        <Map floor={mapFloor2}/>
        </div>
        <CreaterList />
      </main>
    )
}

export default MainSection;