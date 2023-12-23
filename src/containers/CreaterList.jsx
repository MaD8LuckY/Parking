import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import { LotsService } from "../service/Lots.service";
import Button from "./UI/Button";
import stylesCreaterList from './CreaterList.module.css';

const CreaterList = (props) => {

  const [places, setPlace] = useState([])

  const fetchData = async () => {
    const responce = await LotsService.getAll()


    const greenLots = responce.active_lots.map(item => {
      return {
      'id': item.id,
      'title' : `${item.id} - ${item.secondName} ${item.firstName} - ${item.carNumber} - ${item.startTime.split(' ')[1].substr(0,5)}`,
      'color': 'red'
  }})
    const redLots = responce.inactive_lots.map(item => {
      return {
      'id': item.id,
      'title' : `${item.id} - Cвободно`,
      'color': 'green'
  }})

    const listOfLots = [...new Set([...greenLots, ...redLots])].sort(function(a, b) {
      return a.id - b.id;
  });
    setPlace(listOfLots)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
      <div className={stylesCreaterList.list}>

        {places.map(place => (
          <ListUsers key={place.id} place={place} />
        ))}

        <Button text='Обновить' onClick={fetchData}/>
      </div>
      
  )

}

export default CreaterList;
