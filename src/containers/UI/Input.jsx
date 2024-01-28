import styleInput from './Input.module.css';

import { setLogin } from "../../features/auth/authSlice";
import { setPassword } from "../../features/auth/authSlice";
import { setCarNumber } from '../../features/item/itemSlice';

import { useDispatch } from "react-redux";
import { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState('')
  const [hasError, setHasError] = useState(false)

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
      default:
        return 0
    }
  }

    return(
      <input 
        className={styleInput.input} 
        type={props.type} 
        onChange={e => {
          setState(e.target.value, props.id);
          setValue(e.target.value);
          setHasError(e.target.value.trim().length === 0)
        }} 
        placeholder={props.name}
        value={value}
        style={{border: hasError ? '1px solid red' : null}}>
      </input>
    )
}

export default Input;