import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import styleForm from './FormAuth.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setToken } from "../../entities/admins/model/adminSlice";
import { useDispatch } from "react-redux";

import authorization from '../../entities/admins/api/auth'
import { errorTypes } from '../../shared/constants/errorTypes';

const FormAuth = () => {

  const [err, setErr] = useState('no')
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    switch (e.target.id) {
      case 'login':
        setLogin(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      default:
        return 0
    }
  }

  const auth = async (e) => {
    e.preventDefault();

    if(login !== '' && password !== ''){

      if(login.includes(".") === true && login.includes("@") === true){
        setErr('no')
      let res = await authorization(login, password);

      console.log(res)

        if(res === 401) {
          setErr('errAuth')
        }
        else if(res === 504){
          setErr('errSys')
        }
        else{
          dispatch(setToken(res.access_token))
          navigate('main/map', { replace: 'true' })
        }
      }
      else{
        setErr('errLogin')
      }
    }
    else {
      setErr('errNoData')
    }
  }

  return (
    <form onSubmit={auth} className={styleForm.form}>
      <Input id='login' onChange={onChangeInput} type='text' value={login} name="Логин" />
      <Input id='password' onChange={onChangeInput} type='password' value={password} name="Пароль" />
      {err === 'no' ?
        <></>
        :
        <p className={styleForm.err}>{errorTypes[err]}</p>
      }
      <Button text="Войти" />
    </form>
  )
}

export default FormAuth;