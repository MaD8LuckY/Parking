import styleInput from './Input.module.css';

import { setLogin } from "../../features/auth/authSlice";
import { setPassword } from "../../features/auth/authSlice";
import { setCarNumber } from '../../features/item/itemSlice';

import { useDispatch } from "react-redux";

const Input = (props) => {
  const dispatch = useDispatch()
  const setState = (text, place) => {
    switch(place) {
      case 'login':
        dispatch(setLogin(text))
        break
      case 'password':
        dispatch(setPassword(text))
        break
      case 'carNumber':
        dispatch(setCarNumber(text))
        break
    }
  }

    return(
      <input 
        className={styleInput.input} 
        type={props.type} 
        onChange={e => {setState(e.target.value, props.id)}} 
        placeholder={props.name}>
      </input>
    )
}

export default Input;