import stylesCreaterList from './CreaterList.module.css';
import ListUsers from './ListUsers';

const CreaterList = (props) => {

  return (
    <div className={stylesCreaterList.list}>

      {props.places.map(place => (
        <ListUsers key={place.id} place={place} />
      ))}

      
    </div>

  )

}

export default CreaterList;
